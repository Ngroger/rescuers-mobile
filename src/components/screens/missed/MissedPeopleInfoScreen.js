import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/MissedPeopleScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import call from 'react-native-phone-call';

function MissedPeopleInfoScreen() {
    const route = useRoute();
    const { data } = route.params;
    const { t } = useTranslation();
    const { colors } = useTheme();

    console.log("data: ", data);

    const makeCall = () => {
        const args = {
            number: data.creator_phone, // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }

        call(args).catch(console.error);
    };

    const formatPrice = (price) => {
        return parseFloat(price).toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.missed")} isLogo={false} />
            <ScrollView>
                <View style={[styles.container, { marginTop: 64 }]}>
                    <View style={styles.authorContainer}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data.creator_photo}` }} style={styles.photoProfile} />
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.fullname}>{data.creator_name} {data.creator_surname}</Text>
                            <Text style={styles.typeOfAccount}>{data.creator_type}</Text>
                        </View>
                    </View>
                    <Text style={styles.date}>Дата создания: {data.date}</Text>
                    <Text style={[styles.title, { color: colors.text }]}>{data.full_name}</Text>
                    <Image source={{ uri: `https://spasateli.kz/api/user/missing/image/${data.photo1}` }} style={styles.photoPreview} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                        <View style={[styles.field, { width: '48%', borderBottomColor: colors.text }]}>
                            <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("missed-screen.information")}</Text>
                            <View style={styles.fieldContainer}>
                                <Text style={[styles.input, { color: colors.thinText }]}>{formatPrice(data.info_price)} тг</Text>
                            </View>
                        </View>
                        <View style={[styles.field, { width: '48%', borderBottomColor: colors.text }]}>
                            <Text style={[styles.fieldTitle, { color: colors.text }]}>{t("missed-screen.finding")}</Text>
                            <View style={styles.fieldContainer}>
                                <Text style={[styles.input, { color: colors.thinText }]}>{formatPrice(data.find_price)} тг</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.description, { fontSize: 18, color: colors.text }]}>{data.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={makeCall} style={styles.button}>
                    <Text style={styles.buttonText}>{t("missed-screen.write-message-button")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default MissedPeopleInfoScreen;