import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/ReferenceScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import {  } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function ReferenceScreen() {
    const {t} = useTranslation();
    const { colors } = useTheme();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("profile-screen.reference")} isLogo={false}/>
            <Text style={[styles.title, { color: colors.text }]}>{t("reference-screen.title")}</Text>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ marginVertical: 6 }}>
                        <Text style={styles.infoTitle}>1. Lorem ipsum dolor sit amet?</Text>
                        <Text style={[styles.infoSubtitle, { color: colors.text }]}>Lorem ipsum dolor sit amet consectetur. Ornare consectetur lobortis lorem ullamcorper libero mi id. Vitae ut adipiscing justo orci sapien. Facilisis et leo turpis aliquam justo dui. Egestas turpis feugiat arcu urna massa et. Augue ligula massa morbi sit urna malesuada feugiat odio.</Text>
                    </View>
                    <View style={{ marginVertical: 6 }}>
                        <Text style={styles.infoTitle}>1. Lorem ipsum dolor sit amet?</Text>
                        <Text style={[styles.infoSubtitle, { color: colors.text }]}>Lorem ipsum dolor sit amet consectetur. Ornare consectetur lobortis lorem ullamcorper libero mi id. Vitae ut adipiscing justo orci sapien. Facilisis et leo turpis aliquam justo dui. Egestas turpis feugiat arcu urna massa et. Augue ligula massa morbi sit urna malesuada feugiat odio.</Text>
                    </View>
                    <View style={{ marginVertical: 6 }}>
                        <Text style={styles.infoTitle}>1. Lorem ipsum dolor sit amet?</Text>
                        <Text style={[styles.infoSubtitle, { color: colors.text }]}>Lorem ipsum dolor sit amet consectetur. Ornare consectetur lobortis lorem ullamcorper libero mi id. Vitae ut adipiscing justo orci sapien. Facilisis et leo turpis aliquam justo dui. Egestas turpis feugiat arcu urna massa et. Augue ligula massa morbi sit urna malesuada feugiat odio.</Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default ReferenceScreen;