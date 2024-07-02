// UserStorage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const UserStorage = {
    getUserId: async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            return userId;
        } catch (error) {
            console.error('Error getting userId from AsyncStorage:', error);
            return null;
        }
    },

    saveUserId: async (userId) => {
        try {
            // Convert userId to string before saving
            const userIdString = userId.toString(); // Ensure userId is a string
            await AsyncStorage.setItem('userId', userIdString);
            console.log('UserId saved successfully.');
        } catch (error) {
            console.error('Error saving userId to AsyncStorage:', error);
        }
    },

    removeUserId: async () => {
        try {
            await AsyncStorage.removeItem('userId');
            console.log('UserId removed from AsyncStorage.');
        } catch (error) {
            console.error('Error removing userId from AsyncStorage:', error);
        }
    }
};

export default UserStorage;
