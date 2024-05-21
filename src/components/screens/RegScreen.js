import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../../styles/RegScreenStyle';
import { useState } from 'react';
import { Feather, Ionicons, Fontisto, MaterialIcons  } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';
import { useNavigation } from '@react-navigation/native';

function RegScreen() {
    const [step, setStep] = useState(1);
    const [value, onChangeValue] = useState();
    const [isCheckbox, setIsCheckbox] = useState();
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isConfirmPasswordHidden, setIsConfirmPasswordConfirm] = useState(false);
    const navigation = useNavigation();
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
                        <TouchableOpacity onPress={() => setStep(2)} style={styles.button}>
                            <Text style={styles.buttonText}>Очевидец</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStep(2)} style={[styles.button, { marginTop: 12 }]}>
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
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                            <View style={[styles.field, {  width: '48%'}]}>
                                <Text style={styles.fieldTitle}>Имя</Text>
                                <View style={styles.fieldContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Введите имя'
                                    />
                                </View>
                            </View>
                            <View style={[styles.field, {  width: '48%'}]}>
                                <Text style={styles.fieldTitle}>Фамилия</Text>
                                <View style={styles.fieldContainer}>
                                    <TextInput
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
                                    value={value}
                                    style={[styles.input, { width: '80%' }]}
                                    onChangeText={(masked, unmasked) => {
                                        onChangeValue(masked)
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
                                    keyboardType='numeric'
                                    style={[styles.input, { width: '80%' }]}
                                    placeholder='Введите email'
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
                        <TouchableOpacity onPress={() => setStep(3)} style={[styles.button, { marginTop: 12 }]}>
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
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Пароль</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput secureTextEntry={isPasswordHidden} placeholder='Введите пароль' style={[styles.input, { width: '80%' }]}/>
                                <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
                                    <Fontisto name={ isPasswordHidden ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.fieldTitle}>Подтвердите пароль</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput secureTextEntry={isConfirmPasswordHidden} placeholder='Подтвердите пароль' style={[styles.input, { width: '80%' }]}/>
                                <TouchableOpacity onPress={() => setIsConfirmPasswordConfirm(!isConfirmPasswordHidden)}>
                                    <Fontisto name={ isConfirmPasswordHidden ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")} style={[styles.button, { marginTop: 24 }]}>
                            <Text style={styles.buttonText}>Зарегистрироватьсяы</Text>
                        </TouchableOpacity>
                    </>
                ) }
            </View>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../images/footer.png')}/>
            </View>
        </View>
    )
};

export default RegScreen