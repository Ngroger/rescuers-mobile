import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../../styles/MainScreen';
import Navbar from '../ux/Navbar';
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6  } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function MainScreen() {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme();
    const route = useRoute();
    const { slug, type } = route.params;

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t(`menu-list.${slug}`)} isLogo={true}/>
            <View style={styles.container}>
                <View style={styles.onlineContainer}>
                    <View style={styles.dot}/>
                    <Text style={styles.onlineText}>0 {t("urgent-call-screen.online")}</Text>
                </View>
                <View style={styles.buttonHelpContainer}>
                    <View style={styles.shadow}/>
                    <TouchableOpacity onPress={() => navigation.navigate("SelectSituationScreen", { type: type })} style={{ width: 200, height: 200, position: 'absolute', zIndex: 10000 }}>
                        <LinearGradient
                            colors={['#FF545C', '#E13737', '#E02424']}
                            start={[0, 0]}  // верхняя часть
                            end={[0, 1]}    // нижняя часть
                            style={styles.buttonHelp}
                        >
                            <Text style={styles.needHelp}>{t("urgent-call-screen.need-help")}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <TouchableOpacity onPress={() => navigation.navigate("TechSupportScreen")} style={styles.goBack}>
                <FontAwesome6  name="headphones" size={16} color="rgba(225, 55, 55, 1)" />
            </TouchableOpacity> */}
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../images/footer.png')}/>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default MainScreen;