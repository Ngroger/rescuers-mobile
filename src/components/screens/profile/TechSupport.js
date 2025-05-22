import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import styles from '../../../styles/TechSupportScreenStyle';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useIsFocused, useNavigation, useFocusEffect } from '@react-navigation/native';
import { useEffect, useState, useCallback } from 'react';
import UserStorage from '../../../store/UserStorage';

function TechSupportScreen() {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [message, onChangeMessage] = useState();
    const [userData, setUserData] = useState(null);
    const isFocused = useIsFocused();

    useFocusEffect(
        useCallback(() => {
            if (isFocused) {
                fetchUserData();
            }
        }, [isFocused])
    );

    const fetchUserData = async () => {
        try {
            const userId = await UserStorage.getUserId();
            if (userId) {
                const response = await fetch(`https://spasateli.kz/api/user/info/${userId}`);
                const responseJson = await response.json();
                if (responseJson.success) {
                    setUserData(responseJson.user[0]);

                    fetchChat(responseJson.user[0].user_id);
                }
            }
        } catch (error) {
            console.log('fetch user data error: ', error);
        }
    };

    const fetchChat = async (userId) => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/tech-support/chat/${userId}`);
            const responseJson = await response.json();
            if (responseJson.success) {
                setMessages(responseJson.items);
                console.log("user data: ", responseJson.items);
            }
        } catch (error) {
            console.log('fetch chat error: ', error);
        }
    };

    const sendMessage = async () => {
        try {
            const response = await fetch('https://spasateli.kz/api/user/tech-support/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: userData.user_id,
                    admin_id: 20,
                    role: 'user',
                    message: message
                })
            });

            const responseJson = await response.json();
            if (responseJson.success) {
                onChangeMessage('');
                fetchChat(userData.user_id); // Обновить чат после отправки сообщения
            }
        } catch (error) {
            console.log('send message error: ', error);
        }
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
            <Text style={{ fontFamily: 'NotoSansMedium', marginLeft: 24, paddingVertical: 12, color: 'rgba(31, 31, 31, 0.7)', fontSize: 20 }}>Тех.поддержка / Чат</Text>
            {messages && messages.length > 0 ? (
                <ScrollView style={styles.messages}>
                    {messages.map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.message,
                                { alignItems: item.role === 'admin' ? 'flex-start' : 'flex-end' }
                            ]}
                        >
                            {item.role === 'admin' ? (
                                <View style={styles.profileContainer}>
                                    <View style={styles.techImage}>
                                        <MaterialIcons name="headphones" size={24} color="rgba(255, 255, 255, 1)" />
                                    </View>
                                    <View style={{ marginLeft: 6, alignItems: 'flex-start' }}>
                                        <Text style={styles.fullname}>Светлана</Text>
                                        <Text style={styles.typeOfAccount}>Тех.поддержка</Text>
                                    </View>
                                </View>
                            ) : (
                                <View style={styles.profileContainer}>
                                    <View style={{ marginRight: 6, alignItems: 'flex-end' }}>
                                        <Text style={styles.fullname}>{userData?.name} {userData?.surname}</Text>
                                        <Text style={styles.typeOfAccount}>{userData?.type}</Text>
                                    </View>
                                    <Image style={styles.photoProfile} source={{ uri: `https://spasateli.kz/api/user/avatar/${userData?.photo}` }} />
                                </View>
                            )}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    marginTop: 6
                                }}
                            >
                                {item.role === 'user' && (
                                    <Text style={styles.time}>{new Date(item.created_at).toLocaleTimeString()}</Text>
                                )}
                                <View
                                    style={[
                                        styles.messageCard,
                                        item.role === 'admin' ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 }
                                    ]}
                                >
                                    <Text style={styles.messageText}>{item.message || 'No message'}</Text>
                                </View>
                                {item.role === 'admin' && (
                                    <Text style={[styles.time, { marginLeft: 6 }]}>
                                        {new Date(item.created_at).toLocaleTimeString()}
                                    </Text>
                                )}
                            </View>
                        </View>
                    ))}
                </ScrollView>
            ) : (
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Пока сообщений нет</Text>
                    <Text style={{ width: '75%', textAlign: 'center' }}>
                        Вы можете отправить сообщение, и первый освободившийся оператор вам ответит
                    </Text>
                </View>
            )}
            <View style={styles.messageContainer}>
                <View style={styles.field}>
                    <Text style={styles.fieldTitle}>Сообщение</Text>
                    <View style={styles.fieldContainer}>
                        <TextInput
                            placeholder='Введите сообщение'
                            style={styles.input}
                            value={message}
                            onChangeText={(text) => onChangeMessage(text)}
                        />
                        {message && (
                            <TouchableOpacity onPress={sendMessage}>
                                <FontAwesome name="send" size={24} color="#7D8F9D" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
            <StatusBar translucent={true} backgroundColor='transparent' />
        </View>
    );
}

export default TechSupportScreen;
