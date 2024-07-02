import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../styles/FaqScreenStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';

function Accordion({ anwser, question }) {
    const [isOpen, setIsOpen] = useState(false);
    const { colors } = useTheme();
    return (
        <View style={[styles.accordion, { borderBottomColor: colors.text }]}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.accordionContainer}>
                <Text style={[styles.question, { color: colors.text }]}>{question}</Text>
                <MaterialIcons name={ isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down" } size={24} color={ colors.text } />
            </TouchableOpacity>
            { isOpen && (
                <Text style={[styles.anwser, { color: colors.thinText }]}>{anwser}</Text>
            ) }
        </View>
    )
};

export default Accordion;