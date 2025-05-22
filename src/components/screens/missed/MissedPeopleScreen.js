import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../../styles/MissedPeopleScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import MissingCard from '../../ux/MissingCard';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function MissedPeopleScreen() {
    const [filter, setFilter] = useState("people");
    const [missed, setMissed] = useState([]);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchMissed();
    }, []);

    useEffect(() => {
        applyFilter();
    }, [filter, missed]);

    const fetchMissed = async () => {
        try {
            const response = await fetch("https://spasateli.kz/api/user/missing");

            const responseJson = await response.json();

            if (responseJson.success) {
                setMissed(responseJson.missing);
            }
        } catch (error) {
            console.error("Fetch Missing Error: ", error);
        }
    };

    const applyFilter = () => {
        if (filter === 'people') {
            return missed.filter(item => item.type === 'human');
        } else if (filter === 'animal') {
            return missed.filter(item => item.type === 'animal');
        } else {
            return missed;
        }
    };

    const filteredMissed = applyFilter();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.missed")} isLogo={false} />
            <View style={[styles.container, { marginTop: 64 }]}>
                <TouchableOpacity onPress={() => navigation.navigate("WriteMissedPeopleScreen")} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginBottom: 12 }}>
                    <Text style={{ fontSize: 20, color: colors.text }}>{t("missed-screen.report-a-missed")}</Text>
                    <View style={styles.addIcon}>
                        <AntDesign name='plus' color='rgba(255, 255, 255, 1)' size={16} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.container, { paddingVertical: 0, marginBottom: 12 }]}>
                <ScrollView horizontal={true} style={styles.filters}>
                    <TouchableOpacity onPress={() => setFilter("people")} style={filter !== 'people' && { opacity: 0.5 }}>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("missed-screen.search-human")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter("animal")} style={filter === 'animal' ? { marginLeft: 12 } : { marginLeft: 12, opacity: 0.5 }}>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("missed-screen.search-animal")}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.container}>
                {missed.length > 0 ? (
                    <>
                        {filteredMissed.map((item, index) => (
                            <MissingCard key={index} data={item} />
                        ))}
                    </>
                ) : (
                    <View>
                        <Text style={styles.noListTitle}>Пропавших не обнаружено</Text>
                        <Text style={styles.noListSubtitle}>Здесь будет отображаться список всех пропущенных людей и животных</Text>
                    </View>
                )}
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default MissedPeopleScreen;
