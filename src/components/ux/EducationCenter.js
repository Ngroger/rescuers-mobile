import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/EducationMapScreenStyle';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../themes/ThemeProvider';

function EdutcationCenter({ data, selectCenter, selectedCenter }) {
    const isSelected = selectedCenter && selectedCenter.id === data.id;
    const { colors } = useTheme();

    return (
        <TouchableOpacity onPress={() => selectCenter(data)} style={ isSelected ? [styles.selectedEducationCenter, { backgroundColor: colors.card }] : [styles.educationCenter, { backgroundColor: colors.card }] }>
            <View style={styles.educationHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.address, { color: colors.text }]}>{data.address}</Text>
                    <FontAwesome name='map-marker' style={{ marginLeft: 6 }} size={24} color="rgba(125, 143, 157, 1)"/>
                </View>
                <Text style={[styles.schedule, { color: colors.text }]}>
                    {data.time_open.slice(0, -3)} - {data.time_close.slice(0, -3)}
                </Text>
            </View>
            <View style={styles.educationInfo}>
                <View>
                    <Text style={[styles.phoneNumber, { color: colors.thinText }]}>{data.phone_number}</Text>
                    <Text style={[styles.phoneNumber, { color: colors.thinText }]}>{data.phone_number}</Text>
                    <Text style={[styles.phoneNumber, { color: colors.thinText }]}>{data.phone_number}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={[styles.mail, { color: colors.thinText }]}>{data.email}</Text>
                    <Text style={styles.site}>{data.website_link}</Text>
                    <View style={styles.mediaContainer}>
                        <TouchableOpacity style={styles.media}>
                            <FontAwesome name="whatsapp" size={24} color="rgba(255, 255, 255, 1)" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.media, { marginLeft: 6 }]}>
                            <FontAwesome name="telegram" size={24} color="rgba(255, 255, 255, 1)" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.media, { marginLeft: 6 }]}>
                            <FontAwesome name="instagram" size={24} color="rgba(255, 255, 255, 1)" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default EdutcationCenter;
