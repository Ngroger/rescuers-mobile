import { Text, View, TouchableOpacity, Modal } from 'react-native';
import styles from '../../../styles/PhotoChooiseModalStyle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function PhotoChooiseModal({ takePhoto, pickPhoto, modalVisible, closeModal }) {
    const {t} = useTranslation();
    const {colors} = useTheme();
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
                    <TouchableOpacity onPress={takePhoto} style={styles.selectorContainer}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("chooise-modal.take-photo")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickPhoto} style={[styles.selectorContainer, { borderBottomWidth: 0 }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("chooise-modal.pick-photo")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default PhotoChooiseModal;