import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/StatusScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import {  } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import UserStorage from '../../../store/UserStorage';
import WarningModal from '../../ux/modals/WarningModal';

function StatusScreen() {
    const { t } = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [status, setStatus] = useState();
    const [userData, setUserData] = useState(null);
    const [userId, setUserId] = useState();

    useEffect(() => {
        fetchUserData();
    }, [userData]);

    const fetchUserData = async () => {
        try {
            const userId = await UserStorage.getUserId();
            if (userId) {
                setUserId(userId);
                const response = await fetch(`https://spasateli.kz/api/user/info/${userId}`);
                const responseJson = await response.json();
                if (responseJson.success) {
                    setUserData(responseJson.user[0]);
                    setStatus(responseJson.user[0].shiftStatus);
                }
            }
        } catch (error) {
            console.log("fetchUserData", error)
        }
    }

    const updateStatus = async (status) => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/change-shift/${userId}/${status}`);
            const responseJson = await response.json();
            if (responseJson.success) {
                setStatus(status);
            }
        } catch (error) {
            console.log("updateStatus error", error);
        }
    }

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("my-status-screen.title")}isLogo={false}/>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.chooise-status")}</Text>
                <View style={styles.statusContainer}>
                    <TouchableOpacity 
                        disabled={ status === 'off-shift' } 
                        onPress={() => updateStatus("off-shift")} 
                        style={ status === 'off-shift' ? [styles.statusButton, { opacity: 0.5 }] : styles.statusButton }
                    >
                        <Text style={styles.statusText}>{t("my-status-screen.off-shift")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        disabled={ status === 'on-shift' } 
                        onPress={() => updateStatus("on-shift")} 
                        style={ status === 'on-shift' ? [styles.statusButton, { opacity: 0.5 }] : styles.statusButton }
                    >
                        <Text style={styles.statusText}>{t("my-status-screen.on-shift")}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ marginVertical: 8 }}>
                        <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.rescuers-on-duty")}</Text>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, borderRadius: 1000, backgroundColor: '#44E65E' }}/>
                            <Text style={[styles.title, { marginLeft: 6, color: colors.thinText }]}>0 {t("my-status-screen.on-duty")}</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 8 }}>
                        <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.count-incidents")}</Text>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, borderRadius: 1000, backgroundColor: '#44E65E' }}/>
                            <Text style={[styles.title, { marginLeft: 6, color: colors.thinText  }]}>0 {t("my-status-screen.incident")}</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 8 }}>
                        <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.rescuers-in-incident")}</Text>
                        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <View style={{ width: 10, height: 10, borderRadius: 1000, backgroundColor: '#44E65E' }}/>
                            <Text style={[styles.title, { marginLeft: 6, color: colors.thinText  }]}>0 {t("my-status-screen.participating")}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("MapIncidents")} style={styles.button}>
                    <Text style={styles.buttonText}>{t("my-status-screen.map")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Journal")} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                    <Text style={styles.buttonText}>{t("my-status-screen.journal")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../../images/footer.png')}/>
            </View>
            <WarningModal modalVisible={ userData?.isVerify === 0 ? true : false }/>
        </View>
    )
};

export default StatusScreen;