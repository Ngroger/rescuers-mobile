import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../../../styles/TechSupportScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function TechSupportScreen() {
    const navigation = useNavigation();
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
            <Text style={{ fontFamily: 'NotoSansMedium', marginLeft: 24, paddingVertical: 12, color: 'rgba(31, 31, 31, 0.7)', fontSize: 20 }}>Тех.поддержка / Чат</Text>
            <ScrollView style={styles.messages}>
                <View style={[styles.message, { alignItems: 'flex-start' }]}>
                    <View style={styles.profileContainer}>
                        <View style={styles.techImage}>
                            <MaterialIcons name="headphones" size={24} color="rgba(255, 255, 255, 1)" />
                        </View>
                        <View style={{ marginLeft: 6, alignItems: 'flex-start' }}>
                            <Text style={styles.fullname}>Светлана</Text>
                            <Text style={styles.typeOfAccount}>Тех.поддержка</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 6 }}>
                        <View style={[styles.messageCard, { borderTopLeftRadius: 0 }]}>
                            <Text style={styles.messageText}>Lorem Ipsum</Text>
                        </View>
                        <Text style={[styles.time, { marginLeft: 6 }]}>14:00</Text>
                    </View>
                </View>
                <View style={[styles.message, { alignItems: 'flex-end' }]}>
                    <View style={styles.profileContainer}>
                        <View style={{ marginRight: 6, alignItems: 'flex-end' }}>
                            <Text style={styles.fullname}>Иван Иванов</Text>
                            <Text style={styles.typeOfAccount}>Очевидец</Text>
                        </View>
                        <Image style={styles.photoProfile}/>
                    </View>
                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 6 }}>
                        <Text style={styles.time}>14:00</Text>
                        <View style={[styles.messageCard, { borderTopRightRadius: 0 }]}>
                            <Text style={styles.messageText}>Lorem Ipsum</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.messageContainer}>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Сообщение</Text>
                    <View style={styles.fieldContainer}>
                        <TextInput placeholder='Введите сообщение' style={styles.input}/>
                        <TouchableOpacity>
                            <FontAwesome name="send" size={24} color="#7D8F9D" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
        </View>
    )
};

export default TechSupportScreen;