import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    navbar: {
        width: '100%',
        height: '120@vs',
        position: 'absolute',
        zIndex: 1000,
        top: 0
    },
    goBack: {
        height: 35,
        width: 35,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10000,
        top: 30,
        left: 30
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: '24@msr',
        width: '100%'
    },
    title: {
        fontSize: '18@s',
        fontFamily: 'NotoSansBold',
        color: '1F1F1F'
    },
    description: {
        fontSize: '14@s',
        color: '#1F1F1F',
        fontFamily: 'NotoSansLight'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '12@msr'
    },
    fieldTitle: {
        fontSize: '14@s',
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
        fontSize: '16@s',
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '50%',
    },
    button: {
        width: '100%',
        padding: '16@msr',
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: '18@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    footer: {
        width: '100%',
        height: '120@vs',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0
    },
    error: {
        fontSize: '18@s',
        color: '#E13737',
        fontFamily: 'NotoSansLight',
        textAlign: 'center',
        paddingVertical: 6
    }
});

export default styles;