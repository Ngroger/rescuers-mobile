import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../../styles/DisastersScreenStyle';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function DisasterCard({ data }) {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const {colors} = useTheme();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("DisasterScreen", { data: data })} style={styles.disaster}>
            <Image source={{ uri: `https://spasateli.kz/api/user/disaster/image/${data.photo_preview}` }} style={styles.disasterImage}/>
            <View style={styles.disasterInfo}>
                <Text style={[styles.disasterTitle, { color: colors.text }]}>{data.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <AntDesign name="clockcircle" size={16} color="rgba(125, 143, 157, 1)" />
                        <Text style={styles.disasterInfoText}>{data.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginLeft: 12 }}>
                        <Entypo name="eye" size={16} color="rgba(125, 143, 157, 1)" />
                        <Text style={styles.disasterInfoText}>{data.views} {t("blog-screen.views")}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default DisasterCard;