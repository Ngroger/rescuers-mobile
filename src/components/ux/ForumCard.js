import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from '../../styles/ForumListScreenStyle'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../themes/ThemeProvider';

function ForumCard({ data }) {
    const navigation = useNavigation();
    const { colors } = useTheme();

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString();
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("ForumScreen", { data: data })} style={[styles.tread, { backgroundColor: colors.card }]}>
            <Ionicons name="chatbox-ellipses" size={28} color="rgba(225, 55, 55, 1)" />
            <View style={{ marginLeft: 12, flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={[styles.treadTitle, { color: colors.text }]}>{data.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <Entypo name="chat" size={14} color="rgba(125, 143, 157, 1)" />
                        <Text style={[styles.commentsCount, { color: colors.text }]}>{data.comments_count}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Text style={[styles.author, { color: colors.thinText }]}>{data.forum_author_name} {data.forum_author_surname}</Text>
                    <Text style={[styles.date, { color: colors.thinText }]}>{formatDate(data.created_at)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default ForumCard;