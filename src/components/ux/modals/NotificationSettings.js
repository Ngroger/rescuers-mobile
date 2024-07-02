import { Text, View, TouchableOpacity, Modal } from 'react-native';
import styles from '../../../styles/modals/FilterStyle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function NotificationSettings({ modalVisible, closeModal }) {
    const {t} = useTranslation();
    const { colors } = useTheme();

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
                    <Text style={[styles.title, { color: colors.text }]}>{t("notification-modal.title")}</Text>
                    <TouchableOpacity style={[styles.selectorContainer, { borderColor: colors.thinText }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("notification-modal.default")}</Text>
                        <View style={[styles.selector, { borderColor: colors.thinText }]}>
                            <View style={styles.dot}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectorContainer, { borderColor: colors.thinText }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("notification-modal.off")}</Text>
                        <View style={[styles.selector, { borderColor: colors.thinText }]}>
                            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selectorContainer, { borderBottomWidth: 0 }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("notification-modal.on")}</Text>
                        <View style={[styles.selector, { borderColor: colors.thinText }]}>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default NotificationSettings;