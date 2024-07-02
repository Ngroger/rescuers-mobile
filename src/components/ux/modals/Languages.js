import { Text, View, TouchableOpacity, Modal } from 'react-native';
import styles from '../../../styles/modals/FilterStyle';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LangStore from '../../../store/LangStore';
import i18n from '../../../i18';
import { useTheme } from '../../../themes/ThemeProvider';

function Languages({ modalVisible, closeModal }) {
    const [language, setLanguage] = useState("default");
    const { t } = useTranslation();
    const { colors } = useTheme();

    useEffect(() => {
        getLanguage();
    });

    const getLanguage = async () => {
        const lang = await LangStore.getLanguage();
        setLanguage(lang);
    }

    const selectLanguage = async (language) => {
        setLanguage(language);
        if (language === 'default') {
            i18n.changeLanguage('ru');
            await LangStore.saveLanguage('default');
        } else {
            i18n.changeLanguage(language);
            await LangStore.saveLanguage(language);
        }
    }

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
                    <Text style={[styles.title, { color: colors.text }]}>{t("change-language-modal.title")}</Text>
                    <TouchableOpacity onPress={() => selectLanguage("default")} style={[styles.selectorContainer, { borderColor: colors.thinText }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("notification-modal.default")}</Text>
                        <View style={[styles.selector, { borderColor: colors.thinText }]}>
                            { language === 'default' && <View style={styles.dot}/> }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectLanguage("ru")} style={[styles.selectorContainer, { borderColor: colors.thinText }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("change-language-modal.ru")}</Text>
                        <View style={[styles.selector, { borderColor: colors.thinText }]}>
                            { language === 'ru' && <View style={styles.dot}/> }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectLanguage("kz")} style={[styles.selectorContainer, { borderBottomWidth: 0, borderBottomColor: colors.thinText }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("change-language-modal.kz")}</Text>
                        <View style={[styles.selector, { borderColor: colors.thinText }]}>
                            { language === 'kz' && <View style={styles.dot}/> }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default Languages;