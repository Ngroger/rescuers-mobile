import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../../styles/BlogListScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import FilterModal from '../../ux/modals/FilterModal';
import BlogCard from '../../ux/BlogCard';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { useFocusEffect } from '@react-navigation/native';

function BlogListScreen() {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [filter, setFilter] = useState("default");
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState("Пожары");
    const { t } = useTranslation();
    const { colors } = useTheme();

    useFocusEffect(
        useCallback(() => {
            fetchBlog();
        }, [])
    );

    const fetchBlog = async () => {
        try {
            const response = await fetch('https://spasateli.kz/api/user/blog');
            const responseJson = await response.json();

            if (responseJson.success) {
                setBlogs(responseJson.blogs);
            }
        } catch (error) {
            console.log("Fetch Blog Error: ", error);
        }
    }

    const sortedBlogs = blogs.sort((a, b) => {
        if (a.category === category && b.category !== category) {
            return -1;
        }
        if (a.category !== category && b.category === category) {
            return 1;
        }
        return 0;
    });

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.blog")} isLogo={false} />
            <View style={styles.container}>
                {/* <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                        <AntDesign name='search1' size={24} color='rgba(225, 55, 55, 1)'/>
                        <TextInput placeholderTextColor={colors.thinText} placeholder={t("blog-screen.search")} style={[styles.search, { color: colors.text }]}/>
                    </View>
                    <TouchableOpacity onPress={() => setIsOpenFilter(true)}>
                        <AntDesign name="menuunfold" size={24} color="rgba(125, 143, 157, 1)" />
                    </TouchableOpacity>
                </View> */}
                <ScrollView horizontal={true} style={styles.filters}>
                    <TouchableOpacity onPress={() => setCategory("Пожары")} style={category !== 'Пожары' && { opacity: 0.5 }} >
                        <Text style={[styles.filter, { color: colors.text }]}>{t("blog-screen.fire")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCategory("Наводнения")} style={category !== 'Наводнения' && { opacity: 0.5 }} >
                        <Text style={[styles.filter, { marginLeft: 12, color: colors.text }]}>{t("blog-screen.waterfall")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCategory("Землетрясения")} style={category !== 'Землетрясения' && { opacity: 0.5 }} >
                        <Text style={[styles.filter, { marginLeft: 12, color: colors.text }]}>{t("blog-screen.earthshaker")}</Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView showsVerticalScrollIndicator={false} style={{ borderWidth: 0 }}>
                    {sortedBlogs.map((item, index) => (
                        <BlogCard key={index} data={item} />
                    ))}
                    <View style={{ marginBottom: 100 }} />
                </ScrollView>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <FilterModal filter={filter} setFilter={setFilter} closeModal={() => setIsOpenFilter(false)} modalVisible={isOpenFilter} />
        </View>
    )
};

export default BlogListScreen;
