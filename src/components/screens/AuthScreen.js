import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../styles/AuthScreenStyles';
import { StatusBar } from 'expo-status-bar';
import MaskInput from 'react-native-mask-input';
import { useState } from 'react';
import { Feather, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import UserStorage from '../../store/UserStorage';
import { useTranslation } from 'react-i18next';

function AuthScreen() {
    const [isHidden, setIsHidden] = useState(true);
    const [data, setData] = useState({
        login: "",
        password: ""
    });
    const navigation = useNavigation();
    const [message, setMessage] = useState();
    const { t } = useTranslation();

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const auth = async () => {
        try {
            const response = await fetch('https://spasateli.kz/api/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phone: data.login, password: data.password })
            });

            const responseJson = await response.json();
            if (responseJson.success) {
                await UserStorage.saveUserId(responseJson.userId);
                navigation.navigate("MainScreen", { slug: 'urgent-call', type: 'Актуальный' });
            } else {
                setMessage(responseJson.message);
            }
        } catch (error) {
            console.log("auth error: ", error);
        }
    }

    return(
        <View style={styles.background}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                <MaterialIcons name="arrow-left" size={32} color="rgba(225, 55, 55, 1)" />
            </TouchableOpacity>
            <Image style={styles.navbar} source={require('../../images/navbar.png')}/>
            <View style={styles.container}>
                <Text style={styles.title}>{t("auth-screen.title")}</Text>
                <Text style={styles.description}>{t("auth-screen.subtitle")}</Text>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>{t("auth-screen.phone-title")}</Text>
                    <View style={styles.fieldContainer}>
                        <MaskInput
                            keyboardType='numeric'
                            value={data.login}
                            style={styles.input}
                            onChangeText={(masked, unmasked) => {
                                handleChangeInput("login", unmasked)
                            }}
                            mask={['+', /\d/, '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <Feather name="phone-call" size={24} color="#7D8F9D" />
                    </View>
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>{t("auth-screen.password-title")}</Text>
                    <View style={styles.fieldContainer}>
                        <TextInput 
                            secureTextEntry={isHidden} 
                            placeholder={t("auth-screen.password-placeholder")}
                            style={[styles.input, { width: '80%' }]}
                            value={data.password}
                            onChangeText={(text) => handleChangeInput("password", text)}
                        />
                        <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
                            <Fontisto name={ isHidden ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, color: 'rgba(31, 31, 31, 1)', paddingVertical: 16 }}>Забыли пароль?</Text>
                    </TouchableOpacity>
                </View> */}
                <Text style={styles.error}>{message}</Text>
                <TouchableOpacity disabled={!data.login || !data.password} onPress={() => auth()} style={ !data.login || !data.password ? [styles.button, { opacity: 0.5 }] : styles.button }>
                    <Text style={styles.buttonText}>{t("auth-screen.login-button")}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../images/footer.png')}/>
                <View style={{ flexDirection: 'row', position: 'absolute', zIndex: 10000, alignItems: 'center', justifyContent: 'space' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans', color: 'rgba(31, 31, 31, 1)' }}>{t("auth-screen.account")}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("RegScreen")} style={{ marginLeft: 4 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans', color: 'rgba(225, 55, 55, 1)' }}>{t("auth-screen.create-button")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default AuthScreen;