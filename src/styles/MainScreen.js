import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    buttonHelpContainer: {
        width: 220,
        height: 220,
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
        fontSize: 52,
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
        width: 10,
        height: 10,
        borderRadius: 1000
    },
    onlineText: {
        marginLeft: 6,
        color: 'rgba(125, 143, 157, 1)',
        fontSize: 18,
        fontFamily: 'NotoSans'
    },
    footer: {
        width: '100%',
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0
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
        bottom: 30,
        right: 30
    },
});

export default styles;