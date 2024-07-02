import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    container: {
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 0
    },
    title: {
        marginTop: 64,
        marginVertical: 12,
        marginLeft: 24,
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium'
    },
    infoTitle: {
        fontFamily: 'NotoSans',
        fontSize: 20,
        color: 'rgba(231, 95, 95, 1)',
    },
    infoSubtitle: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        
    }
});

export default styles;