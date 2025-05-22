import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import styles from '../../../styles/ActualIncidentScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import call from 'react-native-phone-call';
import { useEffect, useState } from 'react';
import UserStorage from '../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import Navbar from '../../ux/Navbar';
import { useTheme } from '../../../themes/ThemeProvider';

function ActualIncidentScreen() {
    const navigation = useNavigation();
    const [data, setData] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { t } = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchUserId();
    }, [userId, data]);

    const fetchUserId = async () => {
        try {
            const userId = await UserStorage.getUserId();
            console.log("userId: ", userId);
            if (userId) {
                setUserId(userId);
                await fetchActualIncidents(userId);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    const fetchActualIncidents = async (userId) => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/actual/incidents/${userId}`);
            const responseJson = await response.json();
            if (responseJson.success && responseJson.incidents.length > 0) {
                setData(responseJson.incidents[0]);
                console.log("responseJson.incidents: ", responseJson.incidents);
            } else {
                setData(null);
            }
        } catch (error) {
            console.log("fetchActualIncidents error: ", error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString();
    };

    const makeCall = () => {
        const args = {
            number: data?.phone, // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        };

        call(args).catch(console.error);
    };

    if (isLoading) {
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <Text style={{ fontSize: 20, fontFamily: 'NotoSansSemibold', color: colors.text }}>{t("journal-info-screen.error-title")}</Text>
                <Text style={{ fontSize: 16, fontFamily: 'NotoSans', textAlign: 'center', color: colors.text }}>{t("journal-info-screen.error-subtitle")}</Text>
            </View>
        );
    }

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.actual-incident")} />
            {data !== null ? (
                <>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.journalInfo}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <Text style={[styles.numberOfJournal, { color: colors.text }]}>№{data?.incident_id}</Text>
                                    <Text style={styles.currentStatus}>({data?.type})</Text>
                                </View>
                                <Text style={[styles.text, { color: colors.text }]}>{formatDate(data?.created_at)}</Text>
                            </View>
                            <View style={[styles.journalInfo, { marginVertical: 4 }]}>
                                <Text style={[styles.status, { color: colors.thinText }]}>{data?.status}</Text>
                                {/* <Text style={styles.text}>2 (км)</Text> */}
                            </View>
                            <View style={styles.profile}>
                                <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data?.user_photo}` }} style={styles.photoProfile} />
                                <View style={{ marginLeft: 6 }}>
                                    <Text style={[styles.fullname, { color: colors.text }]}>{data?.user_name} {data?.user_surname}</Text>
                                    <Text style={[styles.number, { color: colors.thinText }]}>{data?.user_phone}</Text>
                                </View>
                            </View>
                            <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                                <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("journal-info-screen.type-of-incident")}</Text>
                                <View style={styles.fieldContainer}>
                                    <Text style={[styles.input, { color: colors.thinText }]}>{data?.category}</Text>
                                </View>
                            </View>
                            <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                                <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("journal-info-screen.geolocation")}</Text>
                                <View style={styles.fieldContainer}>
                                    <Text style={[styles.input, { color: colors.thinText }]}>{data?.location}</Text>
                                </View>
                            </View>
                            <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                                <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("journal-info-screen.description")}</Text>
                                <View style={styles.fieldContainer}>
                                    <Text style={[styles.input, { color: colors.thinText }]}>{data?.description}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => makeCall()} style={styles.button}>
                            <Text style={styles.buttonText}>{t("journal-info-screen.call-button")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("ReasonScreen", { incident_id: data.incident_id })} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                            <Text style={styles.buttonText}>{t("journal-info-screen.cancel")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("MapIncidents")} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                            <Text style={styles.buttonText}>{t("journal-info-screen.map")}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'NotoSansSemibold', color: colors.text }}>{t("journal-info-screen.no-incident-title")}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans', textAlign: 'center', color: colors.text }}>{t("journal-info-screen.no-incident-subtitle")}</Text>
                </View>
            )}
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    );
};

export default ActualIncidentScreen;
