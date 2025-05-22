import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import createStyles from '../../../styles/DocumentsScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';
import { MaterialIcons } from '@expo/vector-icons';


function RescuerCode() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const info = [
    {
      title: t("rescuer-code-screen.info-1"),
      info: t("rescuer-code-screen.info-text-1")
    },
    {
      title: t("rescuer-code-screen.info-2"),
      info: t("rescuer-code-screen.info-text-2")
    },
    {
      title: t("rescuer-code-screen.info-3"),
      info: t("rescuer-code-screen.info-text-3")
    },
    {
      title: t("rescuer-code-screen.info-4"),
      info: t("rescuer-code-screen.info-text-4")
    },
    {
      title: t("rescuer-code-screen.info-5"),
      info: t("rescuer-code-screen.info-text-5")
    },
    {
      title: t("rescuer-code-screen.info-6"),
      info: t("rescuer-code-screen.info-text-6")
    }
  ]

  return (
    <View style={styles.background}>
      <View style={styles.navbar}>
        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
            <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.text }]}>{t("profile-screen.rescuer-code")}</Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 24, marginTop: 12 }}>
        {info.map((item, index) => (
          <View key={index} style={styles.infoContainer}>
            <Text style={styles.infoTitle}>{item.title}</Text>
            {item.info.split('<br/>').map((paragraph, i) => (
              <Text key={i} style={styles.infoText}>{paragraph}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
      <StatusBar translucent={true} backgroundColor='transparent' />
    </View>
  )
};

export default RescuerCode; RescuerCode