import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Alert } from 'react-native';
import styles from '../../../styles/DisasterAddScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import PhotoChooiseModal from '../../ux/modals/PhotoChooiseModal';
import * as ImagePicker from 'expo-image-picker';
import UserStorage from '../../../store/UserStorage';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function DisasterAddScreen() {
    const [data, setData] = useState({
        title: "",
        description: "",
        photo1: null,
        photo2: null
    });
    const [isOpenChooise, setIsOpenChooise] = useState(false);
    const [selectedPhoto, setSelectdPhoto] = useState();
    const [userId, setUserId] = useState();
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId);
        }
    }

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Camera permissions are required to take a photo.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setData(prevData => ({
                ...prevData,
                [selectedPhoto]: result.assets[0].uri
            }));
        }
        setIsOpenChooise(false);
    };

    const pickPhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Media Library permissions are required to pick a photo.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setData(prevData => ({
                ...prevData,
                [selectedPhoto]: result.assets[0].uri
            }));
        }
        setIsOpenChooise(false);
    };

    const openChooise = (photo) => {
        setSelectdPhoto(photo);
        setIsOpenChooise(true);
    } 

    const removePhoto = (photo) => {
        setData(prevData => ({
            ...prevData,
            [photo]: null
        }));
    }

    const addDisaster = async () => {
        const formData = new FormData();
        formData.append('photo', {
            uri: data.photo1,
            name: 'photo.jpg',
            type: 'image/jpeg'
        });
        formData.append('photo_preview', {
            uri: data.photo2,
            name: 'photo.jpg',
            type: 'image/jpeg'
        });
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("type", "Пользовательские");
        formData.append("user_id", userId);
        formData.append("date", new Date().toLocaleDateString()); // Используйте ISO формат даты
    
        try {
            const response = await fetch('https://spasateli.kz/api/user/disasters/add-disaster', {
                method: 'POST',
                body: formData
            });
    
            const responseJson = await response.json();
            console.log(responseJson);
    
            if (responseJson.success) {
                navigation.goBack();
            }
        } catch (error) {
            console.log("addDisaster: ", error);
        }
    };
    

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.disasters")} isLogo={false}/>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>{t("add-disasters.title")}</Text>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[ styles.fieldTitle, { color: colors.text } ]}>{t("add-disasters.title-title")}</Text>
                    <TextInput placeholderTextColor={colors.thinText} name="title" value={data.title} onChangeText={(text) => handleChangeInput("title", text)} placeholder={t("add-disasters.title-placeholder")} style={styles.input}/>
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={[ styles.fieldTitle, { color: colors.text } ]}>Фото</Text>
                    <View style={styles.photoContainer}>
                        { data.photo1 ? (
                            <View style={styles.selectedImageContainer}>
                                <Image source={{ uri: data.photo1 }} style={styles.selectedImage}/>
                                <TouchableOpacity onPress={() => removePhoto("photo1")} style={styles.addPhoto}>
                                    <AntDesign name='close' color='#FFF' size={20}/>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={[styles.photoSelect, { backgroundColor: colors.card }]}>
                                <TouchableOpacity onPress={() => openChooise("photo1")} style={styles.addPhoto}>
                                    <AntDesign name='plus' color='#FFF' size={20}/>
                                </TouchableOpacity>
                            </View>
                        ) }
                        { data.photo2 ? (
                            <View style={[styles.selectedImageContainer, { marginLeft: 12 }]}>
                                <Image source={{ uri: data.photo2 }} style={styles.selectedImage}/>
                                <TouchableOpacity onPress={() => removePhoto("photo2")} style={styles.addPhoto}>
                                    <AntDesign name='close' color='#FFF' size={20}/>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={[styles.photoSelect, { marginLeft: 12, backgroundColor: colors.card }]}>
                                <TouchableOpacity onPress={() => openChooise("photo2")} style={styles.addPhoto}>
                                    <AntDesign name='plus' color='#FFF' size={20}/>
                                </TouchableOpacity>
                            </View>
                        ) }
                    </View>
                </View>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[ styles.fieldTitle, { color: colors.text } ]}>{t("add-disasters.description-title")}</Text>
                    <TextInput placeholderTextColor={colors.thinText} name="description" value={data.description} onChangeText={(text) => handleChangeInput("description", text)} multiline={true} placeholder={t("add-disasters.description-placeholder")} style={[styles.input, { height: 150, textAlignVertical: 'top' }]}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => addDisaster()} style={styles.button}>
                    <Text style={styles.buttonText}>{t("public-button")}</Text>
                </TouchableOpacity>
            </View>
            <PhotoChooiseModal takePhoto={takePhoto} pickPhoto={pickPhoto} modalVisible={isOpenChooise} closeModal={() => setIsOpenChooise(false)}/>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default DisasterAddScreen;