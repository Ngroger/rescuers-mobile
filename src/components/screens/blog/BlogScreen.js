import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/BlogScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function BlogScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { data } = route.params;
    const [playing, setPlaying] = useState(false);
    const {t} = useTranslation();
    const { colors } = useTheme();

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    
    const togglePlaying = useCallback(() => {
            setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={styles.background}>
            <TouchableOpacity style={styles.goBackContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                </TouchableOpacity>
                <Text style={styles.goBackText}>{t("blog-screen.back-button")}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{data.first_title}</Text>
            <Image source={{ uri: `https://spasateli.kz/api/user/blog/preview-image/${data.background_image}` }}  style={styles.backgroundImage} />
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={[styles.blogTitle, { color: colors.text }]}>{data.second_title}</Text>
                    {/* <View style={{ borderRadius: 100 }}>
                        <YoutubePlayer
                            height={300}
                            play={playing}
                            style={styles.videoContainer}
                            videoId={data.video_url}
                            onChangeState={onStateChange}
                        />
                    </View> */}
                    <Text style={[styles.blogDescription, { color: colors.text }]}>{data.description}</Text>
                </ScrollView>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    )
};

export default BlogScreen;
