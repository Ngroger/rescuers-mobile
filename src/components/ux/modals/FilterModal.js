import { Text, View, TouchableOpacity, Modal } from 'react-native';
import styles from '../../../styles/modals/FilterStyle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../themes/ThemeProvider';

function FilterModal({ filter, setFilter, modalVisible, closeModal }) {
    const {t} = useTranslation();
    const selectFilter = (filter) => {
        setFilter(filter);
        closeModal();
    }
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
                    <Text style={[styles.title, { color: colors.text }]}>{t("blog-screen.filters.title")}</Text>
                    <TouchableOpacity onPress={() => selectFilter("default")} style={[styles.selectorContainer, { borderBottomColor: colors.text }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("blog-screen.filters.default")}</Text>
                        <View style={[styles.selector, { borderColor: colors.text }]}>
                            { filter === 'default' && <View style={styles.dot}/> }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectFilter("date")} style={[styles.selectorContainer, { borderBottomColor: colors.text }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("blog-screen.filters.date")}</Text>
                        <View style={[styles.selector, { borderColor: colors.text }]}>
                        { filter === 'date' && <View style={styles.dot}/> }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectFilter("popular")} style={[styles.selectorContainer, { borderBottomWidth: 0, borderBottomColor: colors.text }]}>
                        <Text style={[styles.selectorText, { color: colors.text }]}>{t("blog-screen.filters.popular")}</Text>
                        <View style={[styles.selector, { borderColor: colors.text }]}>
                        { filter === 'popular' && <View style={styles.dot}/> }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

export default FilterModal;