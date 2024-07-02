import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/MissedPeopleScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import {  } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function MissedPeopleInfoScreen() {
    const route = useRoute();
    const { data } = route.params;
    const {t} = useTranslation();
    const {colors} = useTheme();

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.missed")} isLogo={false}/>
            <ScrollView>
                <View style={[styles.container, { marginTop: 64 }]}>
                    {/* <View style={styles.authorContainer}>
                        <Image style={styles.photoProfile}/>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.fullname}>Андрей Голубцев</Text>
                            <Text style={styles.typeOfAccount}>Очевидец</Text>
                        </View>
                    </View> */}
                    {/* <Text style={styles.date}>Дата создания: 22.05.2024</Text> */}
                    <Text style={[styles.title,{ color: colors.text }]}>{data.full_name}</Text>
                    <Image source={{ uri: `https://spasateli.kz/api/user/missing/image/${data.photo1}` }} style={styles.photoPreview}/>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                        <View style={[styles.field, {  width: '48%', borderBottomColor: colors.text }]}>
                            <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("missed-screen.information")}</Text>
                            <View style={styles.fieldContainer}>
                                <Text style={[styles.input, { color: colors.thinText }]}>{data.info_price} тг</Text>
                            </View>
                        </View>
                        <View style={[styles.field, {  width: '48%', borderBottomColor: colors.text }]}>
                            <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("missed-screen.finding")}</Text>
                            <View style={styles.fieldContainer}>
                                <Text style={[styles.input, { color: colors.thinText }]}>{data.find_price} тг</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.description, { fontSize: 18, color: colors.text }]}>{data.description}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{t("missed-screen.write-message-button")}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default MissedPeopleInfoScreen;