import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/AboutProgramScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function AboutProgramScreen() {
    const { t } = useTranslation();
    const { colors } = useTheme();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("profile-screen.about-programm")} isLogo={false} />
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={[styles.version, { color: colors.thinText }]}>{t("about-programm-screen.version")}: 1.0.0</Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../../images/logo.png")} />
                </View>
                <Text style={[styles.subtitle, { color: colors.text }]}>{t("about-programm-screen.description")}</Text>
                <View style={{ marginTop: 32 }}>
                    <Text style={{ color: colors.text, fontFamily: 'NotoSans', fontSize: 16 }}>{t("about-programm-screen.contact-information")}</Text>
                    <Text style={[styles.text, { color: colors.thinText }]}>+8 (702) 511 1511</Text>
                    <Text style={[styles.text, { color: colors.thinText }]}>Info@batyssp.kz</Text>
                    <Text style={[styles.text, { color: 'rgba(10, 49, 255, 1)' }]}>batyssp.kz</Text>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default AboutProgramScreen;