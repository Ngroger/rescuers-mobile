import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/ReasonScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { useEffect, useState } from 'react';
import UserStorage from '../../../store/UserStorage';

function ReasonScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [reason, setReason] = useState();
    const [reasonSlug, setReasonSlug] = useState();
    const route = useRoute();
    const { incident_id } = route.params;
    const [userId, setUserId] = useState();

    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId)
        }
    }

    const selectReason = (reason, reasonSlug) => {
        setReason(reason);
        setReasonSlug(reasonSlug);
        setIsOpen(false);
    };

    const finishIncident = async () => {
        try {
            const response = await fetch("https://spasateli.kz/api/user/actual/incidents/finish", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ reason: reason, incident_id: incident_id, user_id: userId })
            });

            const responseJson = await response.json();
            if (responseJson.success) {
                navigation.goBack();
            }

        } catch (error) {
            console.log("finishIncident: ", error)
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{t("blog-screen.back-button")}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={[styles.fieldContainer, { borderBottomColor: colors.thinText, borderBottomWidth: 1 }]}>
                    <View style={{ width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[styles.input, { color: colors.text }]}>{reasonSlug ? t(`reason-screen.${reasonSlug}`) : 'Выберите причину'}</Text>
                        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                            <MaterialIcons name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color={colors.text} />
                        </TouchableOpacity>
                    </View>
                    {isOpen && (
                        <View>
                            <TouchableOpacity onPress={() => selectReason("Недостаток оборудования", "reason-1")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-1")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Ложный вызов", "reason-2")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-2")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Другие приоритетные вызовы", "reason-3")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-3")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Технические неисправности транспорта", "reason-4")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-4")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Опасность для спасателей", "reason-5")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-5")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Решение руководства", "reason-6")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-6")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Завершение инцидента до прибытия", "reason-7")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-7")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Проблемы с коммуникацией", "reason-8")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-8")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Вмешательство третьих лиц", "reason-9")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-9")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Заблокированный доступ к месту происшествия", "reason-10")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-10")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectReason("Заблокированный доступ к месту происшествия", "reason-10")} style={{ marginVertical: 2 }}>
                                <Text style={[styles.reason, { color: colors.thinText }]}>{t("reason-screen.reason-10")}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => finishIncident()} style={styles.button}>
                    <Text style={styles.buttonText}>{t("reason-screen.finish")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default ReasonScreen;