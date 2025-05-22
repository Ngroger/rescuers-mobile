import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        paddingHorizontal: '24@msr',
        alignItems: 'center'
    },
    buttonHelpContainer: {
        width: '220@s',
        height: '220@vs',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonHelp: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        borderRadius: 1000,
        borderColor: '#A8A6A6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    needHelp: {
        fontSize: '42@s',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontFamily: 'BebasRegular'
    },
    shadow: {
        width: 210,
        height: 210,
        borderRadius: 1000,
        backgroundColor: 'rgba(196, 194, 194, 0.2)',
        shadowColor: "#D6D6D6",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    onlineContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    dot: {
        backgroundColor: 'rgba(68, 230, 94, 1)',
        width: '10@s',
        height: '10@vs',
        borderRadius: 1000
    },
    onlineText: {
        marginLeft: '6@vsr',
        color: 'rgba(125, 143, 157, 1)',
        fontSize: '18@s',
        fontFamily: 'NotoSans'
    },
    footer: {
        width: '100%',
        height: '145@vs',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0
    },
    goBack: {
        height: '35@vs',
        width: '35@vs',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -10,
        bottom: 30,
        right: '30@msr'
    },
});

export default styles;