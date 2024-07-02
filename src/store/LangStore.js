import AsyncStorage from '@react-native-async-storage/async-storage';

const LangStore = {
    // Функция для сохранения выбранного языка
    saveLanguage: async (langCode) => {
        try {
            await AsyncStorage.setItem('language', langCode);
        } catch (error) {
            console.log('Error saving language:', error);
        }
    },

    // Функция для получения выбранного языка
    getLanguage: async () => {
        try {
        const langCode = await AsyncStorage.getItem('language');
        return langCode !== null ? langCode : 'ru'; // Возвращаем 'ru', если язык не установлен
        } catch (error) {
        console.log('Error getting language:', error);
        return 'ru'; // Возвращаем 'ru' в случае ошибки
        }
    }
};

export default LangStore;
