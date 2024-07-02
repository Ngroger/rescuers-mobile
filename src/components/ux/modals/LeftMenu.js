import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import styles from '../../../styles/modals/LeftMenuStyle';
import { FontAwesome5, MaterialCommunityIcons, Feather, FontAwesome, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import UserStorage from '../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function LeftMenu({ modalVisible, closeModal }) {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    const { t } = useTranslation();
    const { colors } = useTheme();
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const userId = await UserStorage.getUserId();
            if (userId) {
                const response = await fetch(`https://spasateli.kz/api/user/info/${userId}`);

                const responseJson = await response.json();

                if (responseJson.success) {
                    setUserData(responseJson.user[0]);
                }
            }
        } catch (error) {
            console.log("fetchUserData", error)
        }
    }

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
        closeModal();
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.background}>
                <TouchableOpacity style={styles.buttonBack} onPress={closeModal} />
                <View style={[styles.container, { backgroundColor: colors.background }]}>
                    <View style={styles.header}>
                        <Image source={require("../../../images/logo.png")} style={styles.logo}/>
                        <Text style={[styles.logoText, { color: colors.text }]}>СПАСАТЕЛЬ</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", { userData: userData })} style={styles.profile}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${userData?.photo}` }} style={styles.photoProfile}/>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={[styles.fullname, { color: colors.text }]}>{userData?.name} {userData?.surname}</Text>
                            <Text style={[styles.typeOfAccount, { color: colors.thinText }]}>{userData?.type}</Text>
                        </View>
                    </TouchableOpacity>
                    { userData?.type === 'Спасатель' && (
                        <>
                            <TouchableOpacity onPress={() => (navigation.navigate("StatusScreen"), closeModal())} style={styles.buttonContainer}>
                                <AntDesign name="tag" size={17} color={ colors.text } />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.my-status")}</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => (navigation.navigate("MainScreen", { slug: "test-call", type: 'Тестовый' }), closeModal())} style={styles.buttonContainer}>
                                <FontAwesome name="warning" size={17} color={ colors.text } />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.actual-incident")}</Text>
                            </TouchableOpacity> */}
                            {/* <TouchableOpacity onPress={() => handleNavigation("EducationMapScreen")} style={styles.buttonContainer}>
                                <FontAwesome name="users" size={17} color={ colors.text } />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.teams")}</Text>
                            </TouchableOpacity> */}
                        </>
                    ) }
                    { userData?.type === 'Очевидец' && (
                        <>
                            <TouchableOpacity onPress={() => (navigation.navigate("MainScreen", { slug: 'urgent-call', type: 'Актуальный' }), closeModal())} style={styles.buttonContainer}>
                                <FontAwesome5 name="hands-helping" size={17} color={ colors.text } />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.urgent-call")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => (navigation.navigate("MainScreen", { slug: "test-call", type: 'Тестовый' }), closeModal())} style={styles.buttonContainer}>
                                <Feather name="phone-call" size={17} color={ colors.text } />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.test-call")}</Text>
                            </TouchableOpacity>
                        </>
                    ) }
                    <TouchableOpacity onPress={() => handleNavigation("EducationMapScreen")} style={styles.buttonContainer}>
                        <FontAwesome5 name="graduation-cap" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.education")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation("ForumListScreen")} style={styles.buttonContainer}>
                        <MaterialCommunityIcons  name="forum" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.forum")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation("BlogListScreen")} style={styles.buttonContainer}>
                        <MaterialCommunityIcons  name="smart-card" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.blog")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("DisastersListScreen")} style={styles.buttonContainer}>
                        <Feather name="wind" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.disasters")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MissedPeopleScreen")} style={styles.buttonContainer}>
                        <FontAwesome name="user" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.missed")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ContactScreen")} style={styles.buttonContainer}>
                        <MaterialCommunityIcons  name="contacts" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.contacts")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("PartnersScreen")} style={styles.buttonContainer}>
                        <Feather  name="users" size={17} color={ colors.text } />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.partners")}</Text>
                    </TouchableOpacity>
                    <View style={{ width: '70%', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: 12 }}>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 25 }} source={require("../../../images/partners/free-icon-font-sony-6424321.png")}/>
                        </View>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 32, height: 6.68 }} source={require("../../../images/partners/Group.png")}/>
                        </View>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 22, height: 22 }} source={require("../../../images/partners/free-icon-font-unsplash-6423310.png")}/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default LeftMenu;