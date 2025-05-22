import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../../styles/BlogListScreenStyle';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function BlogCard({ data }) {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const { colors } = useTheme();

    const getShortDescription = (description) => {
        if (description.length > 50) {
            return description.substring(0, 50) + '...';
        }
        return description;
    };

    return (
        <TouchableOpacity onPress={() => navigation.navigate("BlogScreen", { data: data })} style={styles.blog}>
            <Image source={{ uri: `https://spasateli.kz/api/user/blog/preview-image/${data.preview_image}` }} style={styles.blogImage} />
            <View style={styles.blogInfo}>
                <View>
                    <Text style={[styles.blogTitle, { color: colors.text }]}>{data.first_title}</Text>
                    <Text style={[styles.blogTitle, { color: colors.thinText }]}>{getShortDescription(data.description)}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <AntDesign name="clockcircle" size={16} color="rgba(125, 143, 157, 1)" />
                        <Text style={styles.blogInfoText}>{data.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', marginLeft: 12 }}>
                        <Entypo name="eye" size={16} color="rgba(125, 143, 157, 1)" />
                        <Text style={styles.blogInfoText}>{data.views} {t("blog-screen.views")}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default BlogCard;