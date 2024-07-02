import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeStore = {
    // Функция для сохранения выбранного языка
    saveScheme: async (scheme) => {
        try {
            await AsyncStorage.setItem('theme', scheme);
        } catch (error) {
            console.log('Error saving scheme:', error);
        }
    },

    // Функция для получения выбранного языка
    getScheme: async () => {
        try {
        const scheme = await AsyncStorage.getItem('theme');
        return scheme !== null ? scheme : 'light'; // Возвращаем 'ru', если язык не установлен
        } catch (error) {
        console.log('Error getting scheme:', error);
        return 'light'; // Возвращаем 'ru' в случае ошибки
        }
    }
};

export default ThemeStore;
