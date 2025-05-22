import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import styles from '../../../styles/modals/LeftMenuStyle';
import { FontAwesome5, MaterialCommunityIcons, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import UserStorage from '../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { StatusBar } from 'expo-status-bar'

function LeftMenu({ closeModal }) {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    const { t } = useTranslation();
    const { colors, dark } = useTheme();

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
        <View style={styles.background}>
            <TouchableOpacity style={styles.buttonBack} onPress={closeModal} />
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Image style={styles.navbar} source={require('../../../images/navbar.png')} />
                <View style={styles.header}>
                    <Image source={require("../../../images/logo.png")} style={styles.logo} />
                    <Text style={[styles.logoText, { color: colors.text }]}>СПАСАТЕЛЬ</Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 150 }}>
                    {userData && (
                        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", { userData: userData })} style={styles.profile}>
                            <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${userData?.photo}` }} style={styles.photoProfile} />
                            <View style={{ marginLeft: 6 }}>
                                <Text style={[styles.fullname, { color: colors.text }]}>{userData?.name} {userData?.surname}</Text>
                                <Text style={[styles.typeOfAccount, { color: colors.thinText }]}>{userData?.type}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {userData?.type === 'Спасатель' && (
                        <>
                            <TouchableOpacity onPress={() => (navigation.navigate("StatusScreen"), closeModal())} style={styles.buttonContainer}>
                                <Image
                                    style={styles.imageCat}
                                    source={dark ? require("../../../images/menu_cat/status_light.png") : require("../../../images/menu_cat/status_dark.png")}
                                />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.my-status")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => (navigation.navigate("ActualIncident"), closeModal())} style={styles.buttonContainer}>
                                <Image
                                    style={styles.imageCat}
                                    source={dark ? require("../../../images/menu_cat/incident_light.png") : require("../../../images/menu_cat/incident_dark.png")}
                                />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.actual-incident")}</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => handleNavigation("EducationMapScreen")} style={styles.buttonContainer}>
                                <Image 
                                    style={styles.imageCat}
                                    source={dark ? require("../../../images/menu_cat/teams_light.png") : require("../../../images/menu_cat/teams_dark.png")}
                                />
                                <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.teams")}</Text>
                            </TouchableOpacity> */}
                        </>
                    )}
                    <TouchableOpacity onPress={() => (navigation.navigate("MainScreen", { slug: 'urgent-call', type: 'Актуальный' }), closeModal())} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/urgent_call_light.png") : require("../../../images/menu_cat/urgent_call_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.urgent-call")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => (navigation.navigate("MainScreen", { slug: "test-call", type: 'Тестовый' }), closeModal())} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/test_call_light.png") : require("../../../images/menu_cat/test_call_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.test-call")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation("EducationMapScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/edducation_light.png") : require("../../../images/menu_cat/edducation_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.education")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation("ForumListScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/forum_light.png") : require("../../../images/menu_cat/forum_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.forum")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation("BlogListScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/blog_light.png") : require("../../../images/menu_cat/blog_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.blog")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("DisastersListScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/disasters_light.png") : require("../../../images/menu_cat/disasters_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.disasters")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MissedPeopleScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/missed_light.png") : require("../../../images/menu_cat/missed_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.missed")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ContactScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/contacts_light.png") : require("../../../images/menu_cat/contacts_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.contacts")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("PartnersScreen")} style={styles.buttonContainer}>
                        <Image
                            style={styles.imageCat}
                            source={dark ? require("../../../images/menu_cat/partner_light.png") : require("../../../images/menu_cat/partner_dark.png")}
                        />
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("menu-list.partners")}</Text>
                    </TouchableOpacity>
                    <View style={styles.partners}>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                            <Image style={{ width: 32, height: 25 }} source={require("../../../images/partners/free-icon-font-sony-6424321.png")} />
                        </View>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                            <Image style={{ width: 32, height: 6.68 }} source={require("../../../images/partners/Group.png")} />
                        </View>
                        <View style={{ backgroundColor: '#FFF', width: 50, height: 50, shadowColor: "#000", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 7, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                            <Image style={{ width: 22, height: 22 }} source={require("../../../images/partners/free-icon-font-unsplash-6423310.png")} />
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default LeftMenu;