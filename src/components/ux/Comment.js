import { Text, View, Image } from 'react-native';
import styles from '../../styles/DisasterScreen';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function Comment({ data }) {
    const {t} = useTranslation();
    const { colors } = useTheme();

    function formatTime(isoString) {
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    return (
        <View style={styles.comment}>
            <View style={styles.authorContainer}>
                <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data.message_user_photo}` }} style={styles.photoProfile}/>
                <View style={{ marginLeft: 6 }}>
                    <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <Text style={[styles.fullname, { color: colors.text }]}>{data.message_user_name} {data.message_user_surname}</Text>
                        <Text style={{ marginLeft: 6, fontSize: 18, color: colors.thinText, fontFamily: 'NotoSans' }}>{formatTime(data.created_at)}</Text>
                    </View>
                    <Text style={[styles.typeOfAccount, { color: colors.thinText }]}>{data.message_user_type}</Text>
                </View>
            </View>
            <Text style={[styles.commentDescription, { color: colors.text }]}>{data.content}</Text>
        </View>
    )
};

export default Comment;