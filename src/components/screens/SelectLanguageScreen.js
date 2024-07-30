import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../../styles/SelectLanguageStyle';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import LangStore from '../../store/LangStore';
import i18n from '../../i18';
import { useTranslation } from 'react-i18next';

function SelectLanguageScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const selectLanguage = async (language) => {
        i18n.changeLanguage(language);
        await LangStore.saveLanguage(language);
        navigation.navigate("AuthScreen");
    }

    return(
        <View style={styles.background}>
            <Image style={styles.navbar} source={require('../../images/navbar.png')}/>
            <View style={styles.container}>
                <Text style={styles.title}>{t("language-screen.title")}</Text>
                <Text style={styles.description}>{t("language-screen.subtitle")}</Text>
                
                <TouchableOpacity onPress={() => selectLanguage("ru")} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                    <Text style={styles.buttonText}>{t("language-screen.russian")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectLanguage("kz")} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                    <Text style={styles.buttonText}>{t("language-screen.kazakh")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectLanguage("eng")} style={[styles.button, { backgroundColor: '#7D8F9D' }]}>
                    <Text style={styles.buttonText}>{t("language-screen.english")}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image style={styles.footer} source={require('../../images/footer.png')}/>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default SelectLanguageScreen;