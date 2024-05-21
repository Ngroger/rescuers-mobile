import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../styles/AuthScreenStyles';
import { StatusBar } from 'expo-status-bar';
import MaskInput from 'react-native-mask-input';
import { useState } from 'react';
import { Feather, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function AuthScreen() {
    const [value, onChangeValue] = useState();
    const [isHidden, setIsHidden] = useState(true);
    const navigation = useNavigation();

    return(
        <View style={styles.background}>
            <Image style={styles.navbar} source={require('../../images/navbar.png')}/>
            <View style={styles.container}>
                <Text style={styles.title}>Здравствуйте!</Text>
                <Text style={styles.description}>Откройте мир новых возможностей и удобства.</Text>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Номер телефона</Text>
                    <View style={styles.fieldContainer}>
                        <MaskInput
                            keyboardType='numeric'
                            value={value}
                            style={styles.input}
                            onChangeText={(masked, unmasked) => {
                                onChangeValue(masked)
                            }}
                            mask={['+', /\d/, '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            />
                            <Feather name="phone-call" size={24} color="#7D8F9D" />
                    </View>
                </View>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Пароль</Text>
                    <View style={styles.fieldContainer}>
                        <TextInput secureTextEntry={isHidden} placeholder='Введите пароль' style={styles.input}/>
                        <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
                            <Fontisto name={ isHidden ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, color: 'rgba(31, 31, 31, 1)', paddingVertical: 6 }}>Забыли пароль?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("MainScreen")} style={styles.button}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../images/footer.png')}/>
                <View style={{ flexDirection: 'row', position: 'absolute', zIndex: 10000, alignItems: 'center', justifyContent: 'space' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'NotoSans', color: 'rgba(31, 31, 31, 1)' }}>У вас отсутствует аккаунт?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("RegScreen")} style={{ marginLeft: 4 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'NotoSans', color: 'rgba(225, 55, 55, 1)' }}>Создать</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default AuthScreen;