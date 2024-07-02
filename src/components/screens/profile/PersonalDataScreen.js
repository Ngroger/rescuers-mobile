import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../../../styles/PersonalDataScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, Feather, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import UserStorage from '../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ChangePassword from '../../ux/modals/ChangePassword';

function PersonalDataScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { userData } = route.params;
    const {t} = useTranslation();
    const { colors } = useTheme();
    const [userId, setUserId] = useState();
    const [data, setData] = useState({
        name: userData.name,
        surname: userData.surname,
        phone: userData.phone,
        email: userData.email,
        photo: null
    });
    const [isModified, setIsModified] = useState(false);
    const [isEditPassword, setIsEditPassowrd] = useState(false);

    useEffect(() => {
        fetchUserId();
        checkIfModified();
    }, [data]);

    const fetchUserId = async _ => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId);
        }
    };

    // Функция для проверки изменений
    const checkIfModified = () => {
        const modified = 
            data.name !== userData.name ||
            data.surname !== userData.surname ||
            data.phone !== userData.phone ||
            data.email !== userData.email;

        setIsModified(modified);
    };

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const pickImage = async () => {
        // Ask for permission to access gallery
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("Permission to access camera roll is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setData(prevData => ({
                ...prevData,
                photo: result.assets[0].uri
            }))
        }
    };

    const saveAvatar = async () => {
        const formData = new FormData();
        formData.append('newImage', {
            uri: data.photo,
            name: `photo.jpg`,
            type: `image/jpeg`,
        });
        formData.append("userId", userId);
        try {
            const response = await fetch('https://spasateli.kz/api/user/upload-avatar', {
                method: 'POST',
                body: formData,
            });

            const responseJson = await response.json();

            if (responseJson.success) {
                setData(prevData => ({
                    ...prevData,
                    photo: null
                }))
            }
        } catch (error) {
            console.log("saveAvatar error: ", error)
        }
    }

    const logout = async () => {
        try {
            await UserStorage.removeUserId();
            console.log('UserId removed from AsyncStorage.');
        } catch (error) {
            console.error('Error removing userId from AsyncStorage:', error);
        } finally {
            navigation.navigate("AuthScreen");
        }
    };

    const saveData = async _ => {
        try {
            const response = await fetch("https://spasateli.kz/api/user/change-data", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    name: data.name, 
                    surname: data.surname, 
                    phone: data.phone, 
                    email: data.email, 
                    user_id: userId
                })
            });

            const responseJson = await response.json();

            if (responseJson.success) {
                alert(t("messages.data-changed"));
            }
        } catch (error) {
            console.log("saveData error: ", error)
        }
    } 
    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{t("profile-settings.title")}</Text>
                </View>
                <TouchableOpacity onPress={() => logout()}>
                    <Text style={[styles.logout, { color: colors.thinText }]}>{t("profile-settings.exit")}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.photoProfileContainer}>
                        { data.photo === null ? (
                            <TouchableOpacity onPress={() => pickImage()} style={styles.photoProfile}>
                                <Feather name="image" size={36} color="rgba(255, 255, 255, 1)" />
                            </TouchableOpacity>
                        ) : (
                            <View style={{ width: 80, height: 80 }}>
                                <Image source={{ uri: data.photo }}  style={[styles.photoProfile, { width: '100%', height: '100%' }]}/>
                                <View style={{ position: 'absolute', zIndex: 10, bottom: 0, width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => setData(prevData => ({ ...prevData, photo: null }))} style={{ backgroundColor: '#E13737', width: 25, height: 25, borderRadius: 1000, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#FFF' }}>
                                        <AntDesign name='close' color="#FFF" size={16}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => saveAvatar()} style={{ backgroundColor: '#E13737', width: 25, height: 25, borderRadius: 1000, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: '#FFF' }}>
                                        <Feather name='check' color="#FFF" size={16}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) }
                    </View>
                    {/* <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.typeOfAccount}>
                            <Text style={styles.typeOfAccountText}>{t("profile-settings.eyewitness")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.typeOfAccount, { opacity: 0.5 }]}>
                            <Text style={styles.typeOfAccountText}>{t("profile-settings.savers")}</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                        <View style={[styles.field, {  width: '48%', borderBottomColor: colors.thinText }]}>
                            <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("profile-settings.name")}</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput style={[styles.input, { color: colors.text }]} onChangeText={(text) => handleChangeInput("name", text)} value={data.name}/>
                            </View>
                        </View>
                        <View style={[styles.field, {  width: '48%', borderBottomColor: colors.thinText }]}>
                            <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("profile-settings.surname")}</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput style={[styles.input, { color: colors.text }]} onChangeText={(text) => handleChangeInput("surname", text)} value={data.surname}/>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("profile-settings.phone")}</Text>
                        <View style={styles.fieldContainer}>
                            <TextInput style={[styles.input, { color: colors.text }]} onChangeText={(text) => handleChangeInput("phone", text)} value={data.phone}/>
                        </View>
                    </View>
                    <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.fieldTitle, { color: colors.thinText }]}>Email</Text>
                        <View style={styles.fieldContainer}>
                            <TextInput style={[styles.input, { color: colors.text }]} onChangeText={(text) => handleChangeInput("email", text)} value={data.email}/>
                        </View>
                    </View>
                    <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("profile-settings.password")}</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={[ styles.input, { color: colors.text, width: '80%' }  ]}>***********</Text>
                            <TouchableOpacity onPress={() => setIsEditPassowrd(true)}>
                                <Fontisto name="locked" size={24} color="#7D8F9D" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            { isModified && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => saveData()} style={styles.button}>
                        <Text style={styles.buttonText}>Сохранить</Text>
                    </TouchableOpacity>
                </View>
            ) }
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <ChangePassword modalVisible={isEditPassword} closeModal={() => setIsEditPassowrd(false)}/>
        </View>
    )
};

export default PersonalDataScreen;