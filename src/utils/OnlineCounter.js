import { Text, View } from 'react-native';
import styles from '../styles/MainScreen';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

function OnlineCounter() {
  const { t } = useTranslation();
  const [onlineCount, setOnlineCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      fetchOnlineCount();
    }, [])
  )

  const fetchOnlineCount = async () => {
    try {
      const response = await fetch('https://spasateli.kz/api/user/online-count', {
        method: 'GET'
      });

      const responseJson = await response.json();

      if (responseJson.success) {
        setOnlineCount(responseJson.onlineCount);
      }
    } catch (error) {
      console.log('fetch online count: ', error);
    }
  }
  return (
    <View style={styles.onlineContainer}>
      <View style={styles.dot} />
      <Text style={styles.onlineText}>{onlineCount ? onlineCount : 0} {t("urgent-call-screen.online")}</Text>
    </View>
  )
};

export default OnlineCounter;