import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import styles from '../../../../styles/JournalScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import call from 'react-native-phone-call';
import { useEffect, useState } from 'react';
import UserStorage from '../../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import * as Location from 'expo-location';
import SuccessFinishedModal from '../../../ux/modals/SuccessFinishedModal';

function JournalInfoScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { data, isRescuers } = route.params;
    const [userId, setUserId] = useState();
    const { t } = useTranslation();
    const [isExistActual, setIsExistActual] = useState(null);
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0
    });
    const [isFinishedIncident, setIsFinishedIncident] = useState(false);

    useEffect(() => {
        fetchUserId();
        console.log("data: ", data)
    }, [userId]);

    useEffect(() => {
        if (isRescuers) {
            fetchMyLocation();
        };
    }, [coordinates.longitude, coordinates.latitude, isRescuers]);

    const fetchMyLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            // Проверяем, отличаются ли новые координаты от текущих координат в состоянии
            if (data.my_latitude !== location.coords.latitude || data.my_longitude !== location.coords.longitude) {
                setCoordinates({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });
            }
        } catch (error) {
            if (error.code === 'E_LOCATION_UNAVAILABLE') {
                console.log('Current location is unavailable. Make sure that location services are enabled.');
            } else {
                console.log('Error fetching address:', error);
            }
        }
    };

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        console.log("userId: ", userId);
        if (userId) {
            setUserId(userId);
            try {
                const response = await fetch(`https://spasateli.kz/api/user/actual/incidents/${userId}`);
                const responseJson = await response.json();
                setIsExistActual(responseJson.success);
            } catch (error) {
                console.log("fetchActualIncidents error: ", error)
            }
        }
    }

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString([]);
    };

    const makeCall = () => {
        const args = {
            number: data.phone, // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }

        call(args).catch(console.error);
    }

    const feedback = async () => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/actual/incident/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ incident_id: data.incident_id, user_id: userId, rescuer_longitude: coordinates.longitude, rescuer_latitude: coordinates.latitude })
            });

            const responseJson = await response.json();
            console.log("responseJson: ", responseJson);

            if (responseJson.success) {
                Alert.alert(t("messages.feedback-send-title"), t("messages.feedback-send-subtitle"));
                navigation.goBack();
            }
        } catch (error) {
            console.log("feedback error: ", error);
        }
    };

    const finishMyIncident = async () => {
        try {
            const response = await fetch('https://spasateli.kz/api/user/my-incident/finish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    incident_id: data.incident_id,
                    user_id: userId
                })
            });

            const responseJson = await response.json();

            if (responseJson.success) {
                setIsFinishedIncident(true);
            }
        } catch (error) {
            console.log('finish my incident error: ', error);
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{t("blog-screen.back-button")}</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.journalInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                            <Text style={styles.numberOfJournal}>№{data.incident_id}</Text>
                            <Text style={styles.currentStatus}>({data.type})</Text>
                        </View>
                        <Text style={styles.text}>{formatDate(data.created_at)}</Text>
                    </View>
                    <View style={[styles.journalInfo, { marginVertical: 4 }]}>
                        <Text style={styles.status}>{data.status}</Text>
                        {/* <Text style={styles.text}>2 (км)</Text> */}
                    </View>
                    <View style={styles.profile}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data.photo}` }} style={styles.photoProfile} />
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.fullname}>{data.name} {data.surname}</Text>
                            <Text style={styles.number}>{data.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>{t("journal-info-screen.type-of-incident")}</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.input}>{data.category}</Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>{t("journal-info-screen.geolocation")}</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.input}>{data.location}</Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>{t("journal-info-screen.description")}</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.input}>{data.description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                {isRescuers ? (
                    <>
                        {data.status !== 'Завершенный' && (
                            <>
                                <TouchableOpacity onPress={() => makeCall()} style={styles.button}>
                                    <Text style={styles.buttonText}>{t("journal-info-screen.call-button")}</Text>
                                </TouchableOpacity>
                                {userId == data.rescuers_id ? (
                                    <TouchableOpacity onPress={() => navigation.navigate("ReasonScreen", { incident_id: data.incident_id })} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                                        <Text style={styles.buttonText}>{t("journal-info-screen.cancel")}</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <>
                                        {isExistActual ? (
                                            <View style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                                                <Text style={styles.buttonText}>{t("journal-info-screen.feedback-exist")}</Text>
                                            </View>
                                        ) : (
                                            <TouchableOpacity onPress={() => feedback()} style={styles.button}>
                                                <Text style={styles.buttonText}>{t("journal-info-screen.send-feedback")}</Text>
                                            </TouchableOpacity>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate("RouteMap", { longitude: data.longitude, latitude: data.latitude, incidentId: data.incident_id, userId: userId })} style={styles.button}>
                            <Text style={styles.buttonText}>Посмотреть на карте</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => finishMyIncident()} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                            <Text style={styles.buttonText}>Завершить инцидент</Text>
                        </TouchableOpacity>
                    </>

                )}
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <SuccessFinishedModal incidentId={data.incident_id} modalVisible={isFinishedIncident} closeModal={() => setIsFinishedIncident(false)} />
        </View>
    )
};

export default JournalInfoScreen;