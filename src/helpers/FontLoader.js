// FontLoader.js
import * as Font from 'expo-font'

export const FontLoader = async () => {
    await Font.loadAsync({
        'NotoSansBlack': require('../../assets/fonts/NotoSans-Black.ttf'),
        'NotoSansBold': require('../../assets/fonts/NotoSans-Bold.ttf'),
        'NotoSansMedium': require('../../assets/fonts/NotoSans-Medium.ttf'),
        'NotoSansSemibold': require('../../assets/fonts/NotoSans-SemiBold.ttf'),
        'NotoSans': require('../../assets/fonts/NotoSans-Regular.ttf'),
        'NotoSansLight': require('../../assets/fonts/NotoSans-Light.ttf'),
        'NotoSansThin': require('../../assets/fonts/NotoSans-Thin.ttf'),
        'BebasRegular': require('../../assets/fonts/BebasNeue-Regular.ttf')
    });
};
