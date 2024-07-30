import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../../styles/JournalScreenStyle';
import Navbar from '../../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../themes/ThemeProvider';
import { useEffect, useState } from 'react';
import UserStorage from '../../../../store/UserStorage';

function JournalScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [journal, setJournal] = useState([]);
    const [filter, setFilter] = useState("Все");

    useEffect(() => {
        fetchUserId();
    }, [filter, journal]);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            console.log(userId);
            fetchJournal(userId);
        }
    };

    const fetchJournal = async (id) => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/my-incidents/${id}`);
            const responseJson = await response.json();
            if (responseJson.success) {
                setJournal(responseJson.journal);
            }
        } catch (error) {
            console.log("fetch journal error: ", error);
        }
    };

    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString([]);
    };

    const getFilteredJournal = () => {
        if (filter === "Все") {
            return journal;
        }
        return journal.filter(item => item.type === filter);
    };

    const filteredJournal = getFilteredJournal();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("profile-screen.journal")} isLogo={false} />
            <View style={[styles.container, { marginTop: 56 }]}>
                <ScrollView horizontal={true} style={styles.filters}>
                    <TouchableOpacity style={filter !== 'Все' && { opacity: 0.5 }} onPress={() => setFilter("Все")}>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("journal-screen.categories.all")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filter !== 'Актуальный' && { opacity: 0.5 }} onPress={() => setFilter("Актуальный")}>
                        <Text style={[styles.filter, { marginLeft: 12, color: colors.text }]}>{t("journal-screen.categories.actual")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filter !== 'Тест' && { opacity: 0.5 }} onPress={() => setFilter("Тест")}>
                        <Text style={[styles.filter, { marginLeft: 12, color: colors.text }]}>{t("journal-screen.categories.testing")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filter !== 'Завершенный' && { opacity: 0.5 }} onPress={() => setFilter("Завершенный")}>
                        <Text style={[styles.filter, { marginLeft: 12, color: colors.text }]}>{t("journal-screen.categories.finished")}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {filteredJournal.length > 0 ? (
                <ScrollView>
                    <View style={styles.container}>
                        {filteredJournal.map((item, index) => (
                            <TouchableOpacity onPress={() => navigation.navigate("JournalInfoScreen", { data: item, isRescuers: false })} key={index} style={[styles.journalCard, { backgroundColor: colors.card }]}>
                                <View style={styles.journalHeader}>
                                    <Text style={[styles.address, { color: colors.text }]}>{item.location}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                        <FontAwesome style={{ marginRight: 6 }} name="map-marker" size={16} color="rgba(125, 143, 157, 1)" />
                                        <Text style={[styles.time, { color: colors.text }]}>{formatTime(item.created_at)}</Text>
                                    </View>
                                </View>
                                <View style={[styles.journalInfo, { marginVertical: 4 }]}>
                                    <Text style={[styles.status, { color: colors.thinText }]}>{item.status}</Text>
                                </View>
                                <View style={styles.journalInfo}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                        <Text style={[styles.numberOfJournal, { color: colors.thinText }]}>№{item.incident_id}</Text>
                                        <Text style={[styles.currentStatus, { color: item.type === 'Тестовый' ? colors.thinText : 'rgba(225, 55, 55, 0.8)' }]}>({item.type})</Text>
                                    </View>
                                    <Text style={[styles.text, { color: colors.thinText }]}>{formatDate(item.created_at)}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: colors.text, fontFamily: 'NotoSans', width: '75%', textAlign: 'center' }}>По данному запросу не найдено инцидентов</Text>
                </View>
            )}
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    );
};

export default JournalScreen;
