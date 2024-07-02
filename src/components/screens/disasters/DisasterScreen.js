import { Text, ScrollView, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../../styles/DisasterScreen';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Comment from '../../ux/Comment';
import WriteComment from '../../ux/WriteComment';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function DisasterScreen() {
    const route = useRoute();
    const { data } = route.params;
    const [comments, setComments] = useState([]);
    const [isAllComments, setIsAllComments] = useState(false);
    const {t} = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/disasters/${data.nat_dis_id}/messages`);
            const responseJson = await response.json();

            if (responseJson.success) {
                setComments(responseJson.comments);
            }
        } catch (error) {
            console.log("Fetch Comments Error: ", error);
        }
    };

    const displayedComments = isAllComments ? comments : comments.slice(0, 3);

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.disasters")} isLogo={false}/>
            <ScrollView>
                <View  style={styles.container}>
                    <View style={styles.authorContainer}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data.author.photo}` }} style={styles.photoProfile}/>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={[styles.fullname, { color: colors.text }]}>{data.author.name} {data.author.surname}</Text>
                            <Text style={[styles.typeOfAccount, { color: colors.thinText }]}>{data.author.type}</Text>
                        </View>
                    </View>
                    <Text style={[styles.date, { color: colors.thinText }]}>{t("disasters-screen.created-at")}: {data.date}</Text>
                </View>
                <Image source={{ uri: `https://spasateli.kz/api/user/disaster/image/${data.photo}` }} style={styles.image}/>
                <View style={[styles.container, { marginTop: 0 }]}>
                    <Text style={[styles.title, { color: colors.text }]}>{data.title}</Text>
                    <Text style={[styles.description, { color: colors.text }]}>{data.description}</Text>
                </View>
                <View style={[styles.container, { marginTop: 12 }]}>
                    { displayedComments.map((item, index) => (
                        <Comment key={index} data={item}/>
                    )) }
                </View>
                { comments.length > 3 && (
                    <TouchableOpacity onPress={() => setIsAllComments(!isAllComments)} style={styles.readMoreButton}>
                        <Text style={[styles.readMoreButtonText, { color: colors.thinText }]}>{ isAllComments ? t('hide-button') : t("read-more-button") }</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <WriteComment apiKey="disasters" id={data.nat_dis_id}/>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    );
};

export default DisasterScreen;
