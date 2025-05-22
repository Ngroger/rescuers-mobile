import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from '../../styles/RecoveryPasswordStyle';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Feather, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import ConfirmationCode from '../ux/ConfirmationCodeField';
import PasswordFields from '../ux/PasswordFields';
import { useTranslation } from 'react-i18next';

function RecoveryPassScreen() {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState();
  const [message, setMessage] = useState();
  const [step, setStep] = useState(0);
  const [code, onChangeCode] = useState();
  const [data, setData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const { t } = useTranslation();

  const handleChangeData = (name, value) => {
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const sendVerificationCode = async () => {
    try {
      const response = await fetch('https://spasateli.kz/api/user/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      const responseJson = await response.json();

      if (responseJson.success) {
        setMessage();
        setStep(1);
      } else {
        setMessage(t(`recovery-screen.send-mail.${responseJson.message}`));
      }
    } catch (error) {
      console.log('send verification code error: ', code);
    }
  };

  const sendCode = async () => {
    try {
      const response = await fetch('https://spasateli.kz/api/user/verify-code', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
      });

      const responseJson = await response.json();

      if (responseJson.success) {
        setMessage();
        setStep(2)
      } else {
        setMessage(t(`recovery-screen.verify-code.${responseJson.message}`));
      }
    } catch (error) {
      console.log('send code error: ', error);
    }
  };

  const savePassword = async () => {
    if (data.newPassword === data.confirmPassword) {
      if (data.newPassword.length > 8) {
        try {
          const response = await fetch('https://spasateli.kz/api/user/update-password', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, newPassword: data.newPassword })
          });

          const responseJson = await response.json();

          if (responseJson.success) {
            Alert.alert(t("recovery-screen.alert-title"), t("recovery-screen.alert-body"));
            navigation.navigate('AuthScreen');
          }
        } catch (error) {
          console.log('save password error: ', error);
        }
      } else {
        setMessage(t(`recovery-screen.password-step.passowrd-must-be-more`));
      }
    } else {
      setMessage(t(`recovery-screen.password-step.passwords-not-valid`));
    }
  }

  return (
    <View
      style={styles.background}
    >
      <TouchableOpacity onPress={() => step === 0 ? navigation.goBack() : setStep(0)} style={styles.goBack}>
        <MaterialIcons name="arrow-left" size={32} color="rgba(225, 55, 55, 1)" />
      </TouchableOpacity>
      <Image style={styles.navbar} source={require('../../images/navbar.png')} />
      <View style={styles.container}>
        {step === 0 && (
          <>
            <Text style={styles.title}>{t("recovery-screen.send-mail.title")}</Text>
            <Text style={styles.description}>{t("recovery-screen.send-mail.description")}</Text>
            <View style={styles.field}>
              <Text style={styles.fieldTitle}>Email</Text>
              <View style={styles.fieldContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={t("recovery-screen.send-mail.placeholder")}
                  value={email}
                  onChangeText={(text) => onChangeEmail(text)}
                />
              </View>
            </View>
            <Text style={styles.error}>{message}</Text>
            <TouchableOpacity disabled={!email} onPress={() => sendVerificationCode()} style={!email ? [styles.button, { opacity: 0.5 }] : styles.button}>
              <Text style={styles.buttonText}>{t("recovery-screen.next-button")}</Text>
            </TouchableOpacity>
          </>
        )}
        {step === 1 && (
          <>
            <Text style={styles.title}>{t("recovery-screen.verify-code.title")}</Text>
            <Text style={styles.description}>{t("recovery-screen.verify-code.description")}</Text>
            <ConfirmationCode
              code={code}
              onChangeCode={onChangeCode}
            />
            <Text style={styles.error}>{message}</Text>
            <TouchableOpacity onPress={() => sendCode()} style={styles.button}>
              <Text style={styles.buttonText}>{t("recovery-screen.next-button")}</Text>
            </TouchableOpacity>
          </>
        )}
        {step === 2 && (
          <>
            <Text style={styles.title}>{t("recovery-screen.password-step.title")}</Text>
            <Text style={styles.description}>{t("recovery-screen.password-step.description")}</Text>
            <PasswordFields data={data} handleChangeData={handleChangeData} />
            <Text style={styles.error}>{message}</Text>
            <TouchableOpacity
              onPress={() => savePassword()}
              style={
                !data.newPassword || !data.confirmPassword ?
                  [styles.button, { opacity: 0.5 }] :
                  styles.button
              }
              disabled={!data.newPassword || !data.confirmPassword}
            >
              <Text style={styles.buttonText}>{t("recovery-screen.save-button")}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <Image style={styles.footer} source={require('../../images/footer.png')} />
      <StatusBar translucent={true} backgroundColor='transparent' />
    </View>
  )
};

export default RecoveryPassScreen;