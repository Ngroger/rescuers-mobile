import { Text, View, TouchableOpacity, Modal } from 'react-native';
import styles from '../../../styles/modals/SuccessMessageModalStyle';
import { useTheme } from '../../../themes/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

function WarningModal({ incidentId, modalVisible, closeModal }) {
    const { colors } = useTheme();
    const {t} = useTranslation();
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate("MainScreen", { slug: 'urgent-call', type: 'Актуальный' });
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
                    <Text style={[styles.title, { color: colors.text }]}>{t("warning-modal.title")}</Text>
                    <Text style={[styles.description, { color: colors.text }]}>{t("warning-modal.subtitle")}</Text>
                    <TouchableOpacity onPress={() => goBack()} style={[styles.button, { borderTopWidth: 1, borderColor: colors.thinText }]}>
                        <Text style={[styles.buttonText, { color: colors.text }]}>{t("warning-modal.go-back-button")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default WarningModal;