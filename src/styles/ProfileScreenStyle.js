import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    container: {
        width: '100%',
        paddingHorizontal: '24@msr',
        marginTop: '56@msr'
    },
    navbar: {
        width: '100%',
        height: '145@s',
        position: 'absolute',
        zIndex: -10,
        top: 0
    },
    themeButton: {
        position: 'absolute',
        zIndex: 100000,
        right: '32@msr',
        top: '24@msr'
    },
    profileInfo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoProfile: {
        width: 80,
        height: 80,
        borderRadius: 10000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    id: {
        color: "rgba(31, 31, 31, 0.7)",
        fontSize: '13@s',
        fontFamily: 'NotoSans'
    },
    fullname: {
        fontSize: '20@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    typeOfAccount: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans'
    },
    rangContainer: {
        width: '100%',
        marginVertical: '6@msr'
    },
    rang: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
    },
    score: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
    },
    line: {
        width: '100%',
        backgroundColor: 'rgba(31, 31, 31, 0.3)',
        borderRadius: 1000,
        marginTop: '6@msr'
    },
    lineContent: {
        width: '20%',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        borderRadius: 1000,
        padding: 2,
    },
    button: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        marginVertical: '6@msr'
    },
    buttonText: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
    }
});

export default styles;