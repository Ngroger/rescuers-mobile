import { Text, View } from 'react-native';
import styles from '../../styles/StatusScreenStyle';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../../themes/ThemeProvider';

function IncidentsInfo() {
  const { t } = useTranslation();
  const [rescuersOnDuty, setRescuersOnDuty] = useState(0);
  const [rescuersAtTheIncident, setRescuersAtTheIncident] = useState(0);
  const [incidencesPerDay, setIncidencesPerDay] = useState(0);
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      fetchIncidentsInfo();
    }, [])
  )

  const fetchIncidentsInfo = async () => {
    try {
      const response = await fetch('https://spasateli.kz/api/user/incidents-info', {
        method: 'GET'
      });

      const responseJson = await response.json();

      if (responseJson.success) {
        setRescuersOnDuty(responseJson.info.rescuersOnDuty);
        setRescuersAtTheIncident(responseJson.info.rescuersAtTheIncident);
        setIncidencesPerDay(responseJson.info.incidencesPerDay);
      }
    } catch (error) {
      console.log('fetch online count: ', error);
    }
  };


  return (
    <View>
      <View style={{ marginVertical: 8 }}>
        <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.rescuers-on-duty")}</Text>
        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <View style={{ width: 10, height: 10, borderRadius: 1000, backgroundColor: '#44E65E' }} />
          <Text style={[styles.title, { marginLeft: 6, color: colors.thinText }]}>{rescuersOnDuty ? rescuersOnDuty : 0} {t("my-status-screen.on-duty")}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 8 }}>
        <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.count-incidents")}</Text>
        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <View style={{ width: 10, height: 10, borderRadius: 1000, backgroundColor: '#44E65E' }} />
          <Text style={[styles.title, { marginLeft: 6, color: colors.thinText }]}>{rescuersAtTheIncident ? rescuersAtTheIncident : 0} {t("my-status-screen.incident")}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 8 }}>
        <Text style={[styles.title, { color: colors.text }]}>{t("my-status-screen.rescuers-in-incident")}</Text>
        <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
          <View style={{ width: 10, height: 10, borderRadius: 1000, backgroundColor: '#44E65E' }} />
          <Text style={[styles.title, { marginLeft: 6, color: colors.thinText }]}>{incidencesPerDay ? incidencesPerDay : 0} {t("my-status-screen.participating")}</Text>
        </View>
      </View>
    </View>
  )
};

export default IncidentsInfo;