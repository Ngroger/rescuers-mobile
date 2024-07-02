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
        marginTop: 64
    },
    title: {
        marginTop: 64,
        marginVertical: 12,
        marginLeft: 24,
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium'
    },
    version: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSansMedium'
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12
    },
    logo: {
        width: 65,
        height: 65
    },
    subtitle: {
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 1)',
        fontSize: 18,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 0.7)',
        marginVertical: 4
    }
});

export default styles;