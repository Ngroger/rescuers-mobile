import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/PartnersScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { useNavigation } from '@react-navigation/native';

function PartnersScreen() {
    const {t} = useTranslation();
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: colors.text }]}>{t("menu-list.partners")}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={[styles.text, { color: colors.text }]}>{t("parnters-screen.description")}</Text>
                <View style={styles.partnersContainer}>
                    <View style={styles.partnerContainer}>
                        <View style={styles.partner}>
                            <Image style={{ height: 50, width: 50, resizeMode: 'center' }} source={require("../../../images/partners/free-icon-font-sony-6424321.png")}/>
                        </View>
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={[styles.partnerTitle, { color: colors.text }]}>Sony Corporation</Text>
                            <Text style={styles.partnerSubtitle}>Японский транснациональный конгломерат со штаб-квартирой в Токио. В группу компаний Sony входят: Sony Corporation, производящая потребительскую и профессиональную электронику</Text>
                        </View>
                    </View>
                    <View style={styles.partnerContainer}>
                        <View style={styles.partner}>
                            <Image style={{ height: 50, width: 50, resizeMode: 'center' }} source={require("../../../images/partners/free-icon-font-unsplash-6423310.png")}/>
                        </View>
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={[styles.partnerTitle, { color: colors.text }]}>Unsplash</Text>
                            <Text style={styles.partnerSubtitle}>Самый большой архив качественных и коммерческих/некоммерческих иконок. Настоящая кладезь для дизайнеров всех мастей</Text>
                        </View>
                    </View>
                    <View style={styles.partnerContainer}>
                        <View style={styles.partner}>
                            <Image style={{ height: 50, width: 50, resizeMode: 'center' }} source={require("../../../images/partners/Group.png")}/>
                        </View>
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={[styles.partnerTitle, { color: colors.text }]}>Uber</Text>
                            <Text style={styles.partnerSubtitle}>Uber Technologies Inc.; Uber — американская международная публичная компания из Сан-Франциско, создавшая одноимённое мобильное приложение для поиска, вызова и оплаты такси или частных водителей и доставки еды</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../../images/footer.png')}/>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default PartnersScreen;
