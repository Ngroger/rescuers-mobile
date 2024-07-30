import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/ProfileScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { Feather, AntDesign, FontAwesome5, MaterialIcons  } from '@expo/vector-icons';
import NotificationSettings from '../../ux/modals/NotificationSettings';
import { useState, useContext } from 'react';
import Languages from '../../ux/modals/Languages';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import ThemeStore from '../../../store/ThemeStore';

function ProfileScreen() {
    const [isOpenNotifications, setIsOpenNotification] = useState(false);
    const [isOpenLanguages, setIsOpenLanguages] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const { userData } = route.params;
    const {t} = useTranslation();
    const { dark, colors, setScheme } = useTheme();

    const toggleTheme = async () => {
        console.log("test");
        dark ? setScheme('light') : setScheme('dark');
        dark ? await ThemeStore.saveScheme('light') : await ThemeStore.saveScheme('dark');
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Image style={styles.navbar} source={require('../../../images/navbar.png')}/>
            <Navbar backgroundColor="rgba(255, 255, 255, 0)" title={t("menu-list.profile")} isLogo={false}/>
            <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
                <Feather name={ dark ? "moon" : "sun" } size={24} color={ colors.text } />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.profileInfo}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${userData.photo}` }} style={styles.photoProfile}/>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginVertical: 2 }}>
                            <Text style={styles.id}>#{userData.user_id}</Text>
                            {/* <TouchableOpacity style={{ marginLeft: 6 }}>
                                <AntDesign name="copy1" size={16} color="rgba(125, 143, 157, 1)" />
                            </TouchableOpacity> */}
                        </View>
                        <Text style={[styles.fullname, { color: colors.text }]}>{userData.name} {userData.surname}</Text>
                        <Text style={[styles.typeOfAccount, { color: colors.thinText }]}>{userData.type}</Text>
                    </View>
                    <View style={styles.rangContainer}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', display: 'flex' }}>
                            <Text style={[styles.rang, { color: colors.text }]}>{t("profile-screen.userData.level")}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                <Text style={[styles.score, { color: colors.text }]}>{userData.level_experience}</Text>
                                <FontAwesome5 style={{ marginLeft: 6 }} name="medal" size={16} color="rgba(125, 143, 157, 1)" />
                            </View>
                        </View>
                        <View style={[styles.line, { backgroundColor: colors.thinText }]}>
                            <View style={[styles.lineContent, { width: userData.level_experience }]}/>
                        </View>
                    </View>
                    <View style={[styles.info, { borderBottomColor: colors.thinText } ]}>
                        <Text style={[styles.infoTitle, { color: colors.text }]}>Профиль</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("JournalScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.journal")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("AchievementsScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.achievments")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.info, { borderBottomColor: colors.thinText } ]}>
                        <Text style={[styles.infoTitle, { color: colors.text }]}>Настройки</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("PersonalDataScreen", { userData: userData })} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.profile-settings")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsOpenLanguages(true)} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.change-language")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsOpenNotification(true)} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.notifications")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.info, { borderBottomColor: colors.thinText } ]}>
                        <Text style={[styles.infoTitle, { color: colors.text }]}>Информация</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("ContactScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.contacts")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("ReferenceScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.reference")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("AboutProgramScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.about-programm")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("FaqScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.faq")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("PartnersScreen")} style={styles.button}>
                            <Text style={[styles.buttonText, { color: colors.text }]}>{t("profile-screen.parnters")}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color={ colors.text } />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <NotificationSettings modalVisible={isOpenNotifications} closeModal={() => setIsOpenNotification(false)}/>
            <Languages modalVisible={isOpenLanguages} closeModal={() => setIsOpenLanguages(false)}/>
        </View>
    )
};

export default ProfileScreen;