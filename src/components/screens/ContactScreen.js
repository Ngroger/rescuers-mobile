import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../styles/ContactScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function ContactScreen() {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme()
    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{t("menu-list.contacts")}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <Text style={[styles.address, { color:colors.text }]}>Улица Абая, дом 123</Text>
                    <FontAwesome style={{ marginLeft: 6 }} name="map-marker" size={24} color="rgba(125, 143, 157, 1)" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginVertical: 4 }}>
                    <Text style={[styles.number, { color: colors.thinText }]}>+7 (777) 777 7777</Text>
                    <Text style={[styles.company, { color: colors.thinText }]}>{t("contacts-screen.urgent-help")}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginVertical: 4 }}>
                    <Text style={[styles.number, { color: colors.thinText }]}>+7 (777) 777 7777</Text>
                    <Text style={[styles.company, { color: colors.thinText }]}>{t("contacts-screen.tech-support")}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginVertical: 4 }}>
                    <Text style={[styles.number, { color: colors.thinText }]}>+7 (777) 777 7777</Text>
                    <Text style={[styles.company, { color: colors.thinText }]}>{t("contacts-screen.coord-center")}</Text>
                </View>
                <Text style={[styles.mail, { color: colors.text }]}>example1234@gmail.com</Text>
                <Text style={styles.site}>https://example.com</Text>
            </View>
            <View style={styles.mediaContainer}>
                <TouchableOpacity style={styles.media}>
                    <FontAwesome name="whatsapp" size={24} color="rgba(255, 255, 255, 1)" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.media}>
                    <FontAwesome name="youtube-play" size={24} color="rgba(255, 255, 255, 1)" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.media}>
                    <FontAwesome name="telegram" size={24} color="rgba(255, 255, 255, 1)" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.media}>
                    <FontAwesome name="instagram" size={24} color="rgba(255, 255, 255, 1)" />
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default ContactScreen;