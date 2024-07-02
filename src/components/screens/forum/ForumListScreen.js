import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styles from '../../../styles/ForumListScreenStyle';
import Navbar from '../../ux/Navbar';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ForumCard from '../../ux/ForumCard';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function ForumListScreen() {
    const navigation = useNavigation();
    const [forums, setForums] = useState([]);
    const {t} = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchForums();
    }, []);

    const fetchForums = async () => {
        try {
            const response = await fetch("https://spasateli.kz/api/user/forums");
            const responseJson = await response.json();
            if (responseJson.success) {
                setForums(responseJson.forums);
            }
        } catch (error) {
            console.log("fetchForums Error: ", error)
        }
    }

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.forum")} isLogo={false}/>
            <View style={styles.header}>
                <Text style={[styles.title, { color: colors.text }]}>{t("forum-screen.title")}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("WriteTreadScreen")} style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <Text style={{ fontSize: 18, color: colors.thinText, fontFamily: 'NotoSans' }}>{t("forum-screen.new-forum")}</Text>
                    <View style={styles.writeTread}>
                        <AntDesign size={14} color='rgba(255, 255, 255, 1)' name='plus'/>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    { forums.map((item, index) => (
                        <ForumCard key={index} data={item}/>
                    )) }
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default ForumListScreen;