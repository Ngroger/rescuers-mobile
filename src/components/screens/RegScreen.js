import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../styles/RegScreenStyle';
import { useState } from 'react';
import { Feather, Ionicons, Fontisto, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import UserStorage from '../../store/UserStorage';
import * as DocumentPicker from 'expo-document-picker';

function RegScreen() {
    const [step, setStep] = useState(1);
    const [value, onChangeValue] = useState();
    const [isCheckbox, setIsCheckbox] = useState();
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isConfirmPasswordHidden, setIsConfirmPasswordConfirm] = useState(false);
    const navigation = useNavigation();
    const [data, setData] = useState({
        type: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        certificate: null,
        certificateName: ""
    });
    const [message, setMessage] = useState();

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    
    const selectTypeOfAccount = (type) => {
        handleChangeInput("type", type);
        setStep(2);
    }

    const checkUser = async () => {
        console.log("checkuser");
        try {
            const response = await fetch("https://spasateli.kz/api/user/check", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: data.email, phone: data.phone })
            });

            const responseJson = await response.json();

            if (responseJson.success) {
                console.log(responseJson.success);
                setStep(3);
            } else {
                setMessage(responseJson.message)
            }
        } catch (error) {
            console.log("CheckUser Error", error);
        }
    }

    const reg = async () => {
        if (data.password === data.confirmPassword) {
            if (data.confirmPassword.length > 8) {

                const formData = new FormData();
                formData.append('certificate', {
                    uri: data.certificate,
                    name: 'certificate.pdf', // Имя файла
                    type: 'application/pdf'  // MIME тип
                });
                formData.append("type", data.type);
                formData.append("name", data.name);
                formData.append("surname", data.surname);
                formData.append("phone", data.phone);
                formData.append("email", data.email);
                formData.append("password", data.password);

                try {
                    const response = await fetch("https://spasateli.kz/api/user/signup", {
                        method: 'POST',
                        body: formData
                    });

                    const responseJson = await response.json();

                    console.log(responseJson);

                    if (responseJson.success) {
                        console.log(responseJson);
                        await UserStorage.saveUserId(responseJson.userId);
                        navigation.navigate("MainScreen", { slug: 'urgent-call', type: 'Актуальный' });
                    }

                } catch (error) {
                    console.log(error);
                }
            } else {
                setMessage("Пароль должен быть выше 8 символов");
            }
        } else {
            setMessage("Введенные пароли не совпадают");
        }
    };

    const selectFile = async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
            });
            console.log("file: ", res.assets[0].uri);
            console.log("res.type: ", res);
            if (!res.canceled) {
                console.log("file: ", res.assets[0].uri);
                console.log("res selectFile: ", res);
                setData(prevData => ({
                    ...prevData,
                    certificate: res.assets[0].uri,
                    certificateName: res.assets[0].name
                }));
                // Добавьте логику для обработки выбранного файла, например, загрузку на сервер
            }
        } catch (err) {
            console.log('Unknown error: ', err);
        }
    };

    return (
        <View style={styles.background}>
            <Image style={styles.navbar} source={require('../../images/navbar.png')}/>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                <MaterialIcons name="arrow-left" size={32} color="rgba(225, 55, 55, 1)" />
            </TouchableOpacity>
            <View style={styles.container}>
                { step === 1 && (
                    <>
                        <Text style={styles.title}>Здравствуйте!</Text>
                        <Text style={styles.description}>Откройте мир новых возможностей и удобства.</Text>
                        <TouchableOpacity onPress={() => selectTypeOfAccount("Очевидец")} style={styles.button}>
                            <Text style={styles.buttonText}>Очевидец</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectTypeOfAccount("Спасатель")} style={[styles.button, { marginTop: 12 }]}>
                            <Text style={styles.buttonText}>Спасатель</Text>
                        </TouchableOpacity>
                    </>
                ) }
                { step === 2 && (
                    <>
                        <View style={styles.stepsContainer}>
                            <View style={styles.activeStep}>
                                <View style={styles.activeDot}/>
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.step}>
                                <View style={styles.dot}/>
                            </View>
                            { data.type === 'Спасатель' && (
                                <>
                                    <View style={styles.line}/>
                                    <View style={styles.step}>
                                        <View style={styles.dot}/>
                                    </View>
                                </>
                            ) }
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <View style={[styles.field, {  width: '48%'}]}>
                                <Text style={styles.fieldTitle}>Имя</Text>
                                <View style={styles.fieldContainer}>
                                    <TextInput
                                        name="name"
                                        value={data.name}
                                        onChangeText={(text) => handleChangeInput("name", text)}
                                        style={styles.input}
                                        placeholder='Введите имя'
                                    />
                                </View>
                            </View>
                            <View style={[styles.field, {  width: '48%'}]}>
                                <Text style={styles.fieldTitle}>Фамилия</Text>
                                <View style={styles.fieldContainer}>
                                    <TextInput
                                        name="surname"
                                        value={data.surname}
                                        onChangeText={(text) => handleChangeInput("surname", text)}
                                        style={styles.input}
                                        placeholder='Введите фамилию'
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Номер телефона</Text>
                            <View style={styles.fieldContainer}>
                                <MaskInput
                                    keyboardType='numeric'
                                    name="phone"
                                    value={data.phone}
                                    style={[styles.input, { width: '80%' }]}
                                    onChangeText={(masked, unmasked) => {
                                        handleChangeInput("phone", unmasked)
                                    }}
                                    mask={['+', /\d/, '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                />
                                <Feather name="phone-call" size={24} color="#7D8F9D" />
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Email</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput
                                    style={[styles.input, { width: '80%' }]}
                                    placeholder='Введите email'
                                    name="email"
                                    value={data.email}
                                    onChangeText={(text) => handleChangeInput("email", text)}
                                />
                                <Feather name="mail" size={24} color="#7D8F9D" />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', paddingVertical: 12 }}>
                            <TouchableOpacity onPress={() => setIsCheckbox(!isCheckbox)} style={ isCheckbox ? styles.activeCheckbox : styles.checkBox }>
                                <Ionicons name="checkmark" size={16} color="rgba(255, 255, 255, 1)" />
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'NotoSans', color: 'rgba(31, 31, 31, 0.3)', fontSize: 14, marginLeft: 6 }}>Я соглашаюсь с передачей и обработкой моих данных</Text>
                        </View>
                        <Text style={styles.errorMessage}>{message}</Text>
                        <TouchableOpacity disabled={!data.name || !data.surname || !data.phone || !data.email || !isCheckbox} onPress={() => checkUser()} style={ !data.name || !data.surname || !data.phone || !data.email || !isCheckbox ? [styles.button, { marginTop: 12, opacity: 0.5 }] : [styles.button, { marginTop: 12 }] }>
                            <Text style={styles.buttonText}>Далее</Text>
                        </TouchableOpacity>
                    </>
                ) }
                { step === 3 && (
                    <>
                        <View style={styles.stepsContainer}>
                            <View style={styles.step}>
                                <View style={styles.dot}/>
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.activeStep}>
                                <View style={styles.activeDot}/>
                            </View>
                            { data.type === 'Спасатель' && (
                                <>
                                    <View style={styles.line}/>
                                    <View style={styles.step}>
                                        <View style={styles.dot}/>
                                    </View>
                                </>
                            ) }
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Пароль</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput 
                                    name="password"
                                    value={data.password}
                                    onChangeText={(text) => handleChangeInput("password", text)}
                                    secureTextEntry={isPasswordHidden}
                                    placeholder='Введите пароль'
                                    style={[styles.input, { width: '80%' }]}
                                />
                                <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
                                    <Fontisto name={ isPasswordHidden ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Подтвердите пароль</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput 
                                    name="confirmPassword" 
                                    value={data.confirmPassword} 
                                    onChangeText={(text) => handleChangeInput("confirmPassword", text)} 
                                    secureTextEntry={isConfirmPasswordHidden} 
                                    placeholder='Подтвердите пароль' 
                                    style={[styles.input, { width: '80%' }]}
                                />
                                <TouchableOpacity onPress={() => setIsConfirmPasswordConfirm(!isConfirmPasswordHidden)}>
                                    <Fontisto name={ isConfirmPasswordHidden ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.errorMessage, { paddingVertical: 12 }]}>{message}</Text>
                        <TouchableOpacity disabled={!data.password || !data.confirmPassword} onPress={() => data.type === 'Спасатель' ? setStep(4) : reg()} style={ !data.password || !data.confirmPassword ? [styles.button, { marginTop: 0, opacity: 0.5 }] : [styles.button, { marginTop: 0 }] }>
                            <Text style={styles.buttonText}>{ data.type === 'Спасатель' ? 'Далее' : 'Зарегистрироваться' }</Text>
                        </TouchableOpacity>
                    </>
                ) }
                { step === 4 && (
                    <>
                        <View style={styles.stepsContainer}>
                            <View style={styles.step}>
                                <View style={styles.dot}/>
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.dot}>
                                <View style={styles.dot}/>
                            </View>
                            { data.type === 'Спасатель' && (
                                <>
                                    <View style={styles.line}/>
                                    <View style={styles.activeStep}>
                                        <View style={styles.activeDot}/>
                                    </View>
                                </>
                            ) }
                        </View>
                        <View style={styles.fileContainer}>
                            <TouchableOpacity onPress={() => selectFile()} style={styles.fileButton}>
                                <MaterialIcons name="file-download" size={24} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Сертификат</Text>
                            <View style={styles.fieldContainer}>
                                <Text style={[styles.input, { width: '80%' }]}>{ data.certificateName ? data.certificateName : 'Загрузите сертификат' }</Text>
                                <FontAwesome name="file-text-o" size={24} color="#7D8F9D" />
                            </View>
                        </View>
                        <Text style={[styles.errorMessage, { paddingVertical: 12 }]}>{message}</Text>
                        <TouchableOpacity disabled={!data.password || !data.confirmPassword} onPress={() => reg()} style={ !data.password || !data.confirmPassword ? [styles.button, { marginTop: 0, opacity: 0.5 }] : [styles.button, { marginTop: 0 }] }>
                            <Text style={styles.buttonText}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                    </>
                ) }
            </View>
            <View style={styles.footer}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../images/footer.png')}/>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default RegScreen