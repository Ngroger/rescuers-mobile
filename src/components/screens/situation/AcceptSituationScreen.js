import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from '../../../styles/AcceptSituationStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import NeedHelpModal from '../../ux/modals/NeedHelpModal';
import SuccessModal from '../../ux/modals/SuccessMessageModal';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import call from 'react-native-phone-call';
import UserStorage from '../../../store/UserStorage';

function AcceptSituation() {
    const route = useRoute();
    const { data } = route.params;
    const [confirmAddress, onChangeConfirmAddress] = useState(data.address);
    const [isNeedHelpOpen, setIsNeedHelpOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [description, onChangeDescription] = useState();
    const [toWhom, setToWhome] = useState();
    const [incidentId, setIncidentId] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId);
        }
    }

    const makeCall = () => {
        const args = {
            number: '102', // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }
        
        call(args).catch(console.error)
    };

    const createIncident = async () => {
        try {
            const response = await fetch("https://spasateli.kz/api/user/create-incident", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    type: data.type,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    location: confirmAddress,
                    description: description,
                    userId: userId,
                    category: data.category,
                    toWhom: toWhom
                })
            });

            const responseJson = await response.json();

            if (responseJson.success) {
                console.log("test");
                setIncidentId(responseJson.incidentId);
                setIsSuccessOpen(true)
            }
        } catch (error) {
            console.log("createIncident error: ", error)
        }
    }

    const accept = async () => {
        createIncident();
        setIsNeedHelpOpen(false)
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.urgent-call")} isLogo={false}/>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>{t("add-urgent-screen.title2")}</Text>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', display: 'flex' }}>
                    <TouchableOpacity onPress={() => setToWhome("Окружающим")} style={ toWhom === 'Окружающим' ? [styles.button, { opacity: 0.5 }] : styles.button }>
                        <Text style={styles.buttonText}>{t("add-urgent-screen.enviroment")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setToWhome("Мне")} style={ toWhom === 'Мне' ? [styles.button, { opacity: 0.5 }] : styles.button }>
                        <Text style={styles.buttonText}>{t("add-urgent-screen.me")}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("add-urgent-screen.check-address-title")}</Text>
                    <View style={styles.fieldContainer}>
                        <TextInput placeholderTextColor={colors.thinText} value={confirmAddress} onChangeText={(text) => onChangeConfirmAddress(text)} style={[styles.input, { color: colors.text }]}/>
                        <TouchableOpacity>
                            <FontAwesome name="map-marker" size={24} color="#7D8F9D" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.field, { borderBottomColor: colors.text }]}>
                    <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("add-urgent-screen.description-title")}</Text>
                    <TextInput 
                        value={description}
                        onChangeText={(text) => onChangeDescription(text)}
                        placeholderTextColor={colors.thinText} 
                        multiline={true} 
                        placeholder={t("add-urgent-screen.description-placeholder")} 
                        textAlignVertical='top' 
                        style={[styles.input, { height: 100, width: '100%', color: colors.text }]}
                    />
                </View>
            </View>
            <View style={{ width: '100%', position: 'absolute', bottom: 24, paddingHorizontal: 24 }}>
                <TouchableOpacity disabled={!toWhom || !description} onPress={() => setIsNeedHelpOpen(true)} style={ !toWhom || !description ? [styles.button, { width: '100%', borderRadius: 1000, opacity: 0.5 }] : [styles.button, { width: '100%', borderRadius: 1000 }] }>
                    <Text style={[styles.buttonText, { fontSize: 20 }]}>{t("add-urgent-screen.send-button")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <NeedHelpModal 
                accept={() => accept()} 
                call={() => makeCall()} 
                closeModal={() => setIsNeedHelpOpen(false)} 
                onSuccess={() => setIsSuccessOpen(true)} 
                modalVisible={isNeedHelpOpen}
            />
            <SuccessModal incidentId={incidentId} closeModal={() => setIsSuccessOpen(false)} modalVisible={isSuccessOpen}/>
        </View>
    )
};

export default AcceptSituation;