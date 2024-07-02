import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/MissedPeopleScreenStyle'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function MissingCard({ data }) {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("MissedPeopleInfoScreen", { data: data })} style={styles.card}>
            <Image source={{ uri: `https://spasateli.kz/api/user/missing/image/${data.photo1}` }} style={styles.photo}/>
            <View style={{ marginLeft: 6, flex: 1 }}>
                <Text style={[styles.fullname, { color: colors.text }]}>{data.full_name}</Text>
                <Text style={[styles.description, { color: colors.thinText }]}>{data.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <Text style={[styles.info, { color: colors.text }]}>{t("missed-screen.info")} - {data.info_price} тг.</Text>
                    <Text style={[styles.info, { marginLeft: 6, color: colors.text }]}>{t("missed-screen.finding")} - {data.find_price} тг.</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default MissingCard