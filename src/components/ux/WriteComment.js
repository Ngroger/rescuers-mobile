import { View, Text,TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/DisasterScreen';
import UserStorage from '../../store/UserStorage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../themes/ThemeProvider';

function WriteComment({ id, apiKey }) {
    const [comment, onChangeComment] = useState();
    const [userId, setUserId] = useState();
    const {t} = useTranslation();
    const { colors } = useTheme();
    
    useEffect(() => {
        fetchUserId();
    }, []);

    const fetchUserId = async () => {
        try {
            const userId = await UserStorage.getUserId();

            if (userId) {
                setUserId(userId);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const sendComment = async () => {
        try {
            const response = await fetch(`https://spasateli.kz/api/user/${apiKey}/${id}/add-message`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    content: comment,
                    userId: userId
                })
            });

            const responseJson = await response.json();

            if (responseJson.success) {
                onChangeComment();
            }
        } catch (error) {
            console.log("sendComment Error: ", error);
        }
    }

    return (
        <View style={[styles.messageContainer, { backgroundColor: colors.background }]}>
            <View style={[styles.field, { borderBottomColor: colors.thinText }]}>
                <Text style={styles.fieldTitle}>{t("message-title")}</Text>
                <View style={styles.fieldContainer}>
                    <TextInput placeholderTextColor={colors.thinText} name="comment" value={comment} onChangeText={(text) => onChangeComment(text)} placeholder={t("message-placeholder")} style={[styles.input, { color: colors.text }]}/>
                    <TouchableOpacity disabled={!comment} style={ !comment && { opacity: 0.5 } } onPress={() => sendComment()}>
                        <FontAwesome name="send" size={24} color="#7D8F9D" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default WriteComment;