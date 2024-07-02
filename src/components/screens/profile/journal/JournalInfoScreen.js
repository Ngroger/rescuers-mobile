import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../../../styles/JournalScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

function JournalInfoScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { data } = route.params;

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString([]);
    };
    
    return (
        <View style={styles.background}>
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <MaterialIcons name="arrow-left" size={20} color="rgba(225, 55, 55, 1)" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Назад</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.journalInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                            <Text style={styles.numberOfJournal}>№{data.incident_id}</Text>
                            <Text style={styles.currentStatus}>({data.type})</Text>
                        </View>
                        <Text style={styles.text}>{formatDate(data.created_at)}</Text>
                    </View>
                    <View style={[styles.journalInfo, { marginVertical: 4 }]}>
                        <Text style={styles.status}>Поиск спасателей</Text>
                        {/* <Text style={styles.text}>2 (км)</Text> */}
                    </View>
                    <View style={styles.profile}>
                        <Image source={{ uri: `https://spasateli.kz/api/user/avatar/${data.photo}` }}  style={styles.photoProfile}/>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.fullname}>{data.name} {data.surname}</Text>
                            <Text style={styles.number}>{data.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Вид несчастного случая</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.input}>{data.category}</Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Местоположение</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.input}>{data.location}</Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.fieldTitle}>Описание</Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.input}>{data.description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default JournalInfoScreen;