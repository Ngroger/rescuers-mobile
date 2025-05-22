import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../../styles/DisastersScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import DisasterCard from '../../ux/DisasterCard';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function DisastersListScreen() {
    const [filter, setFilter] = useState("Пользовательские");
    const [disasters, setDisasters] = useState([]);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchDisasters();
    }, [filter]);

    const fetchDisasters = async () => {
        try {
            const response = await fetch('https://spasateli.kz/api/user/disasters');
            const responseJson = await response.json();

            console.log("responseJson", responseJson);

            if (responseJson.success) {
                // Фильтруем данные на основе фильтра
                const filteredDisasters = responseJson.disasters.filter(disaster => {
                    if (filter === "Системные") {
                        return disaster.type === 'Системные';
                    } else if (filter === "Пользовательские") {
                        return disaster.type === 'Пользовательские';
                    }
                    return true; // Если фильтр не совпадает, показываем все
                });

                setDisasters(filteredDisasters);
            }
        } catch (error) {
            console.log("Fetch Disasters Error: ", error);
        }
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.disasters")} isLogo={false} />
            <View style={styles.container}>
                <View style={styles.filters}>
                    <TouchableOpacity style={filter !== 'Системные' && { opacity: 0.5 }} onPress={() => setFilter("Системные")}>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("disasters-screen.system")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter("Пользовательские")} style={filter !== 'Пользовательские' ? { marginLeft: 12, opacity: 0.5 } : { marginLeft: 12 }}>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("disasters-screen.users")}</Text>
                    </TouchableOpacity>
                </View>
                {disasters.length > 0 ? (
                    <ScrollView style={{ height: '100%' }}>
                        {disasters.map((item, index) => (
                            <DisasterCard key={index} data={item} />
                        ))}
                    </ScrollView>
                ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <Text style={{ fontFamily: 'NotoSans', color: '#141414', fontSize: 20, opacity: 0.7, textAlign: 'center' }}>
                            {t("disasters-screen.no-data")}
                        </Text>
                    </View>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("DisasterAddScreen")} style={styles.button}>
                    <Text style={styles.buttonText}>{t("disasters-screen.report-a-disasters")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default DisastersListScreen;
