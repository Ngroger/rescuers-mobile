import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/FaqScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Accordion from '../../ux/Accordion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function FaqScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { colors } = useTheme();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{t("profile-screen.faq")}</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Accordion question={t("faq.fist-question")} anwser={t("faq.first-answer")} />
                    <Accordion question={t("faq.second-question")} anwser={t("faq.second-answer")} />
                    <Accordion question={t("faq.three-question")} anwser={t("faq.three-answer")} />
                    <Accordion question={t("faq.four-question")} anwser={t("faq.four-answer")} />
                    <Accordion question={t("faq.fifth-question")} anwser={t("faq.fifth-answer")} />
                    <Accordion question={t("faq.sixth-question")} anwser={t("faq.sixth-answer")} />
                    <View style={{ marginBottom: 100 }} />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("TechSupportScreen")} style={styles.button}>
                    <Text style={styles.buttonText}>{t("faq.tech-support")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default FaqScreen;