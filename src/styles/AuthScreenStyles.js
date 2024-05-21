import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 145,
        position: 'absolute',
        zIndex: 1000,
        top: 0
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: 24,
        width: '100%'
    },
    title: {
        fontSize: 28,
        fontFamily: 'NotoSansBold',
        color: '1F1F1F'
    },
    description: {
        fontSize: 18,
        color: '#1F1F1F',
        fontFamily: 'NotoSansLight'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: 12
    },
    fieldTitle: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans'
    },
    fieldContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 20,
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '50%'
    },
    button: {
        width: '100%',
        padding: 16,
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48
        },
    buttonText: {
        fontSize: 24,
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    footer: {
        width: '100%',
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0
    }
});

export default styles;