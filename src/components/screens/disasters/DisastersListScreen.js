import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/DisastersScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import {  } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import DisasterCard from '../../ux/DisasterCard';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function DisastersListScreen() {
    const [filter, setFilter] = useState("systems");
    const [disasters, setDisasters] = useState([]);
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchDisasters();
    }, []);

    const fetchDisasters = async () => {
        try {
            const response = await fetch('https://spasateli.kz/api/user/disasters');
            const responseJson = await response.json();

            console.log("responseJson", responseJson);

            if (responseJson.success) {
                setDisasters(responseJson.disasters);
            }
        } catch (error) {
            console.log("Fetch Blog Error: ", error);
        }
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.disasters")}isLogo={false}/>
            <View style={styles.container}>
                <View style={styles.filters}>
                    <TouchableOpacity style={ filter !== 'systems' && { opacity: 0.5 } } onPress={() => setFilter("systems")}>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("disasters-screen.system")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter("users")} style={ filter !== 'users' ? { marginLeft: 12, opacity: 0.5 } : { marginLeft: 12 } }>
                        <Text style={[styles.filter, { color: colors.text }]}>{t("disasters-screen.users")}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ height: '100%' }}>
                    { disasters.map((item, index) => (
                        <DisasterCard key={index} data={item}/>
                    )) }
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("DisasterAddScreen")} style={styles.button}>
                    <Text style={styles.buttonText}>{t("disasters-screen.report-a-disasters")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default DisastersListScreen;