import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../styles/WriteTreadScreenStyle';
import Navbar from '../../ux/Navbar';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import UserStorage from '../../../store/UserStorage';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function WriteTreadScreen() {
    const [data, setData] = useState({
        title: "",
        description: ""
    });
    const [userId, setUserId] = useState();
    const navigation = useNavigation();
    const {t} = useTranslation();
    const { colors } = useTheme(); 

    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId);
        }
    };

    const createTread = async () => {
        try {
            const response = await fetch("https://spasateli.kz/api/user/forums/add-forum", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: data.title, description: data.description, userId: userId })
            });
            const responseJson = await response.json();
            if (responseJson.success) {
                navigation.goBack();
            }
        } catch (error) {
            console.log("Create Tread Error: ", error);
        }
    };

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    };
    
    return (
        <View style={[styles.background, { backgroundColor: colors.background }]}>
            <Navbar title={t("menu-list.forum")} isLogo={false}/>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>{t("add-disasters.title")}</Text>
                <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                    <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("add-disasters.title-title")}</Text>
                    <TextInput 
                        name="title" 
                        value={data.title} 
                        onChangeText={(text) => handleChangeInput("title", text)} 
                        placeholder={t("add-disasters.title-placeholder")}
                        placeholderTextColor={colors.text}
                        style={[styles.input, { color: colors.text } ]}
                    />
                </View>
                <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                    <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("add-disasters.description-title")}</Text>
                    <TextInput 
                        name="description" 
                        value={data.description} 
                        onChangeText={(text) => handleChangeInput("description", text)} 
                        textAlignVertical='top' 
                        placeholder={t("add-disasters.description-placeholder")}
                        placeholderTextColor={colors.text}
                        style={[styles.input, { height: 100, color: colors.text }]}
                    />
                </View>
            </View>
            <View style={{ paddingHorizontal: 24, width: '100%', position: 'absolute', bottom: 24 }}>
                <TouchableOpacity onPress={() => createTread()} disabled={!data.title || !data.description} style={ !data.title || !data.description ? [styles.button, { opacity: 0.5 }] : styles.button }>
                    <Text style={styles.buttonText}>{t("public-button")}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default WriteTreadScreen;