import { Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from '../../../styles/modals/ChangePasswordStyle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { Fontisto } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import UserStorage from '../../../store/UserStorage';

function ChangePassword({ filter, setFilter, modalVisible, closeModal }) {
    const {t} = useTranslation();
    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [isHiddenNewPassword, setIsHiddenNewPassword] = useState(true);
    const [isHiddenOldPassword, setIsHiddenOldPassword] = useState(true);
    const [isHiddenConfirmPassword, setIsHiddenConfirmPassword] = useState(true);
    const [userId, setUserId] = useState();
    const [message, setMessage] = useState();
    const { colors } = useTheme();

    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        const userId = await UserStorage.getUserId();
        if (userId) {
            setUserId(userId);
        }
    }

    const handleChangeInput = (name, value) => {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };    

    const savePassword = async () => {
        if (data.confirmPassword === data.newPassword) {
            if (data.confirmPassword.length > 8) {
                try {
                    const response = await fetch('https://spasateli.kz/api/user/change-password', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            oldPassword: data.oldPassword,
                            newPassword: data.newPassword,
                            userId: userId
                        })
                    });
                    const responseJson = await response.json();
                    if (responseJson.success) {
                        console.log("success: ", responseJson)
                        alert(t(`change-password.${responseJson.message}`));
                    } else {
                        console.log("unsuccess: ", responseJson)
                        setMessage(t(`change-password.${responseJson.message}`))
                    }
                } catch (error) {
                    console.log("savePassword error: ", error);
                }
            } else {
                setMessage(t("change-password.sick-pass"))
            }
        } else {
            setMessage(t("change-password.confirm-failed"))
        }
    };

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={styles.background}>
                <TouchableOpacity style={styles.buttonBack} onPress={closeModal} />
                <View style={[styles.container, { backgroundColor: colors.background }]}>
                    <Text style={[styles.title, { color: colors.text }]}>{t("change-password.title")}</Text>
                    <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("change-password.old-pass-title")}</Text>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                placeholderTextColor={colors.text}
                                secureTextEntry={isHiddenOldPassword} 
                                placeholder={t("change-password.old-pass-placeholder")} 
                                style={[styles.input, { width: '80%', color: colors.text }]}
                                value={data.oldPassword}
                                onChangeText={(text) => handleChangeInput("oldPassword", text)}
                            />
                            <TouchableOpacity onPress={() => setIsHiddenOldPassword(!isHiddenOldPassword)}>
                                <Fontisto name={ isHiddenOldPassword ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("change-password.new-pass-title")}</Text>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                placeholderTextColor={colors.text}
                                secureTextEntry={isHiddenNewPassword} 
                                placeholder={t("change-password.new-pass-placeholder")} 
                                style={[styles.input, { width: '80%', color: colors.text }]}
                                value={data.newPassword}
                                onChangeText={(text) => handleChangeInput("newPassword", text)}
                            />
                            <TouchableOpacity onPress={() => setIsHiddenNewPassword(!isHiddenNewPassword)}>
                                <Fontisto name={ isHiddenNewPassword ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.fieldTitle, { color: colors.thinText }]}>{t("change-password.confirm-pass-title")}</Text>
                        <View style={styles.fieldContainer}>
                            <TextInput 
                                placeholderTextColor={colors.text}
                                secureTextEntry={isHiddenConfirmPassword} 
                                placeholder={t("change-password.confirm-pass-placeholder")} 
                                style={[styles.input, { width: '80%', color: colors.text }]}
                                value={data.confirmPassword}
                                onChangeText={(text) => handleChangeInput("confirmPassword", text)}
                            />
                            <TouchableOpacity onPress={() => setIsHiddenConfirmPassword(!isHiddenConfirmPassword)}>
                                <Fontisto name={ isHiddenConfirmPassword ? "locked" : "unlocked" } size={24} color="#7D8F9D" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.error}>{message}</Text>
                    <TouchableOpacity disabled={!data.oldPassword || !data.newPassword || !data.confirmPassword} onPress={() => savePassword()} style={ !data.oldPassword || !data.newPassword || !data.confirmPassword ? [styles.button, { opacity: 0.5 }] : styles.button }>
                        <Text style={styles.buttonText}>{t("change-password.save-button")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default ChangePassword;