import { Text, ScrollView, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../../styles/ForumScreenStyle';
import Navbar from '../../ux/Navbar';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import Comment from '../../ux/Comment';
import WriteComment from '../../ux/WriteComment';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function ForumScreen() {
    const route = useRoute();
    const { data } = route.params;
    const [comments, setComments] = useState([]);
    const [isAllComments, setIsAllComments] = useState(false);
    const { t } = useTranslation();
    const { colors } = useTheme();

    useFocusEffect(
        useCallback(() => {
            fetchComments();
        }, [])
    );

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/forums/${data.forum_id}/messages`);
            const responseJson = await response.json();

            if (responseJson.success) {
                setComments(responseJson.comments);
            }
        } catch (error) {
            console.log("Fetch Comments Error: ", error);
        }
    };

    const displayedComments = isAllComments ? comments : comments.slice(0, 3);

    function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString();
    }

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar backgroundColor='#FFF' title={t("menu-list.forum")} isLogo={false} />
            <ScrollView style={{ marginTop: 12 }}>
                <View style={styles.container}>
                    <View style={styles.authorContainer}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data.forum_author_photo}` }} style={styles.photoProfile} />
                        <View style={{ marginLeft: 6 }}>
                            <Text style={[styles.fullname, { color: colors.text }]}>{data.forum_author_name} {data.forum_author_surname}</Text>
                            <Text style={[styles.typeOfAccount, { color: colors.thinText }]}>{data.forum_author_type}</Text>
                        </View>
                    </View>
                    <Text style={[styles.date, { color: colors.thinText }]}>{t("disasters-screen.created-at")} {formatDate(data.created_at)}</Text>
                    <Text style={[styles.title, { color: colors.text }]}>{data.title}</Text>
                    <Text style={[styles.description, { color: colors.text }]}>{data.description}</Text>
                </View>
                <View style={[styles.container, { marginTop: 12 }]}>
                    {displayedComments.map((item, index) => (
                        <Comment key={index} data={item} />
                    ))}
                    {comments.length > 3 && (
                        <TouchableOpacity onPress={() => setIsAllComments(!isAllComments)} style={styles.readMoreButton}>
                            <Text style={[styles.readMoreButtonText, { color: colors.text }]}>{isAllComments ? 'Свернуть' : 'Читать дальше'}</Text>
                        </TouchableOpacity>
                    )}
                    <View style={{ marginBottom: 200 }} />
                </View>
            </ScrollView>
            <WriteComment apiKey="forums" id={data.forum_id} />
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default ForumScreen;