import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../styles/SelectSituationScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { useState } from 'react';

function SelectSituationScreen() {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme();
    const route = useRoute();
    const { type } = route.params;

    const next = (category) => {
        navigation.navigate("SituationAddressScreen", { category: category, type: type });
    };

    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar isLogo={false} title={t("menu-list.urgent-call")}/>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>{t("add-urgent-screen.title")}</Text>
                <ScrollView style={{ width: '100%' }}>
                    <TouchableOpacity onPress={() => next("Человек без сознания")} style={styles.categoryContainer}>
                        <View style={styles.categoryIconContainer}>
                            <Image source={require('../../../images/categories/category1.png')} style={styles.categoryIcon}/>
                        </View>
                        <Text style={[ styles.categoryText,  { color: colors.text } ]}>{t("add-urgent-screen.categories.cat1")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => next("Боль в сердце")} style={styles.categoryContainer}>
                        <View style={styles.categoryIconContainer}>
                            <Image source={require('../../../images/categories/category5.png')} style={styles.categoryIcon}/>
                        </View>
                        <Text style={[ styles.categoryText,  { color: colors.text } ]}>{t("add-urgent-screen.categories.cat2")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => next("ДТП с пострадавшими")} style={styles.categoryContainer}>
                        <View style={styles.categoryIconContainer}>
                            <Image source={require('../../../images/categories/category2.png')} style={styles.categoryIcon}/>
                        </View>
                        <Text style={[ styles.categoryText,  { color: colors.text } ]}>{t("add-urgent-screen.categories.cat3")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => next("Травма руки/ноги")} style={styles.categoryContainer}>
                        <View style={styles.categoryIconContainer}>
                            <Image source={require('../../../images/categories/category4.png')} style={styles.categoryIcon}/>
                        </View>
                        <Text style={[ styles.categoryText,  { color: colors.text } ]}>{t("add-urgent-screen.categories.cat4")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => next("Другое")} style={styles.categoryContainer}>
                        <View style={styles.categoryIconContainer}>
                            <Image source={require('../../../images/categories/category3.png')} style={styles.categoryIcon}/>
                        </View>
                        <Text style={[ styles.categoryText,  { color: colors.text } ]}>{t("add-urgent-screen.categories.cat5")}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default SelectSituationScreen;