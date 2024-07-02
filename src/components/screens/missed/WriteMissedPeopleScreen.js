import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Alert } from 'react-native';
import styles from '../../../styles/WriteMissedPeopleScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import PhotoChooiseModal from '../../ux/modals/PhotoChooiseModal';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import UserStorage from '../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function WriteMissedPeopleScreen() {
    const [data, setData] = useState({
        type: "",
        fullname: "",
        description: "",
        photo1: null,
        photo2: null,
        photo3: null,
        photo4: null,
        info_price: 0,
        find_price: 0
    });
    const [isOpenChooise, setIsOpenChooise] = useState(false);
    const [selectedPhoto, setSelectdPhoto] = useState(null);
    const navigation = useNavigation();
    const [userId, setUserId] = useState();
    const {t} = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId)
        }
    }

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

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
        console.log(selectedPhoto, data[`${selectedPhoto}`])
        setIsOpenChooise(false);
    };

    const openChooise = (photo) => {
        setSelectdPhoto(photo);
        setIsOpenChooise(true);
    };

    const removePhoto = (photo) => {
        setData(prevData => ({
            ...prevData,
            [photo]: null
        }));
    };

    const createMissed = async () => {
        const formData = new FormData();
        formData.append('photo', {
            uri: data.photo1,
            name: `photo.jpg`,
            type: `image/jpeg`,
        });
        formData.append('photo', {
            uri: data.photo2,
            name: `photo.jpg`,
            type: `image/jpeg`,
        });
        formData.append('photo', {
            uri: data.photo3,
            name: `photo.jpg`,
            type: `image/jpeg`,
        });
        formData.append('photo', {
            uri: data.photo4,
            name: `photo.jpg`,
            type: `image/jpeg`,
        });
        formData.append("type", data.type);
        formData.append("full_name", data.fullname);
        formData.append("description", data.description);
        formData.append("info_price", data.info_price);
        formData.append("find_price", data.find_price);
        formData.append("date", new Date().toLocaleDateString());
        formData.append("userId", userId);

        try {
            const response = await fetch('https://spasateli.kz/api/user/missing/add', {
                method: 'POST',
                body: formData
            });
    
            const responseJson = await response.json();
            console.log(responseJson);
    
            if (responseJson.success) {
                navigation.goBack();
            }
        } catch (error) {
            console.log("createMissed: ", error);
        }
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.missed")} isLogo={false}/>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>{t("add-missed-screen.title")}</Text>
                <View style={styles.typeContainer}>
                    <TouchableOpacity onPress={() => handleChangeInput("type", "human")} style={ data.type === 'human' ? [styles.typeButton, { opacity: 0.5 }] : styles.typeButton }>
                        <Text style={styles.typeText}>{t("add-missed-screen.human-button")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleChangeInput("type", "animal")} style={ data.type === 'animal' ? [styles.typeButton, { opacity: 0.5 }] : styles.typeButton }>
                        <Text style={styles.typeText}>{t("add-missed-screen.animal")}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[ styles.fieldTitle,  { color: colors.text } ]}>{ data.type === 'animal' ? t("add-missed-screen.nickname") : t("add-missed-screen.fullname") }</Text>
                    <TextInput 
                        style={[ styles.input,  { color: colors.text } ]} 
                        placeholderTextColor={colors.thinText}
                        placeholder={ data.type === 'animal' ? t("add-missed-screen.nickname-placeholder")  : t("add-missed-screen.fullname-placeholder")  }
                        value={data.fullname} 
                        onChangeText={(text) => handleChangeInput('fullname', text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 6 }}>
                    <View style={[styles.field, { width: '48%', borderBottomColor: colors.text }]}>
                        <Text style={[ styles.fieldTitle,  { color: colors.text } ]}>{t("missed-screen.information")}</Text>
                        <TextInput 
                            style={[ styles.input,  { color: colors.text } ]} 
                            placeholderTextColor={colors.thinText}
                            placeholder='0 тг' 
                            value={data.info_price.toString()} 
                            onChangeText={(text) => handleChangeInput('info_price', text)}
                        />
                    </View>
                    <View style={[styles.field, { width: '48%', borderBottomColor: colors.text }]}>
                        <Text style={[ styles.fieldTitle,  { color: colors.text } ]}>{t("missed-screen.finding")}</Text>
                        <TextInput 
                            style={[ styles.input,  { color: colors.text } ]} 
                            placeholderTextColor={colors.thinText}
                            placeholder='0 тг' 
                            value={data.find_price.toString()} 
                            onChangeText={(text) => handleChangeInput('find_price', text)}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 6 }}>
                    <Text style={[ styles.fieldTitle,  { color: colors.text } ]}>Фото</Text>
                    <View style={styles.photoContainer}>
                        { [1, 2, 3, 4].map((item, index) => (
                            <View key={index}>
                                { data[`photo${item}`] ? (
                                    <View style={ index > 0 ? [styles.selectedImageContainer, { marginLeft: 12 }] : styles.selectedImageContainer }>
                                        <Image source={{ uri: data[`photo${item}`] }} style={styles.selectedImage}/>
                                        <TouchableOpacity onPress={() => removePhoto(`photo${item}`)} style={styles.addPhoto}>
                                            <AntDesign name='close' color='#FFF' size={20}/>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={ index > 0 ? [styles.photoSelect, { marginLeft: 12, backgroundColor: colors.card }] : [styles.photoSelect, { backgroundColor: colors.card }] }>
                                        <TouchableOpacity onPress={() => openChooise(`photo${item}`)} style={styles.addPhoto}>
                                            <AntDesign name='plus' color='#FFF' size={20}/>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        )) }
                    </View>
                </View>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[ styles.fieldTitle,  { color: colors.text } ]}>{t("add-missed-screen.description-title")}</Text>
                    <TextInput 
                        style={[ styles.input,  { height: 100, textAlignVertical: 'top', color: colors.text }]} 
                        placeholderTextColor={colors.thinText}
                        placeholder={t("add-missed-screen.description-placeholder")} 
                        value={data.description} 
                        onChangeText={(text) => handleChangeInput('description', text)}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => createMissed()} style={styles.button}>
                    <Text style={styles.buttonText}>{t("public-button")}</Text>
                </TouchableOpacity>
            </View>
            <PhotoChooiseModal takePhoto={takePhoto} pickPhoto={pickPhoto} modalVisible={isOpenChooise} closeModal={() => setIsOpenChooise(false)}/>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default WriteMissedPeopleScreen;
