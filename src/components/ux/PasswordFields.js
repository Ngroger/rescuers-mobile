import styles from '../../styles/RecoveryPasswordStyle';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function PasswordFields({ data, handleChangeData }) {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [isHiddenConfirmPassword, setIsHiddenConfirmPassword] = useState(true);
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.field}>
        <Text style={styles.fieldTitle}>{t("recovery-screen.password-step.pass-title")}</Text>
        <View style={styles.fieldContainer}>
          <TextInput
            secureTextEntry={isHiddenPassword}
            style={styles.input}
            placeholder={t("recovery-screen.password-step.pass-placeholder")}
            value={data.newPassword}
            onChangeText={(text) => handleChangeData("newPassword", text)}
          />
          <TouchableOpacity onPress={() => setIsHiddenPassword(!isHiddenPassword)}>
            <Fontisto name={isHiddenPassword ? 'locked' : 'unlocked'} size={24} color='#7D8F9D' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldTitle}>{t("recovery-screen.password-step.confrim-pass-title")}</Text>
        <View style={styles.fieldContainer}>
          <TextInput
            secureTextEntry={isHiddenConfirmPassword}
            style={styles.input}
            placeholder={t("recovery-screen.password-step.confrim-pass-placeholder")}
            value={data.confirmPassword}
            onChangeText={(text) => handleChangeData("confirmPassword", text)}
          />
          <TouchableOpacity onPress={() => setIsHiddenConfirmPassword(!isHiddenConfirmPassword)}>
            <Fontisto name={isHiddenConfirmPassword ? 'locked' : 'unlocked'} size={24} color='#7D8F9D' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

export default PasswordFields;