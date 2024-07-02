import { Text, View, TouchableOpacity, Modal } from 'react-native';
import styles from '../../../styles/modals/NeedHelpModalStyle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function NeedHelpModal({ accept, call, modalVisible, closeModal, onSuccess }) {
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
                    <Text style={[styles.title, { color: colors.text }]}>{t("need-help-modal.title")}</Text>
                    <Text style={[styles.description, { color: colors.text }]}>{t("need-help-modal.description")}</Text>
                    <TouchableOpacity onPress={call} style={[styles.button, { borderTopWidth: 1, borderBottomColor: colors.text }]}>
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("need-help-modal.call-button")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={accept} style={[styles.button, { borderBottomColor: colors.text }]}>
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("need-help-modal.already-called")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={accept} style={[styles.button, { borderBottomWidth: 0, borderBottomColor: colors.text }]}>
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("need-help-modal.not-need")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default NeedHelpModal;