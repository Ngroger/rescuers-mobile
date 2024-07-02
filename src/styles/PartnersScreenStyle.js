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
    },
    navbar: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingTop: 24
    },
    goBack: {
        height: 26,
        width: 26,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        marginLeft: 6
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
    text: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        textAlign: 'center',
        marginVertical: 32
    },
    partnersContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center'
    },
    partnerContainer: {
        justifyContent: 'center',
        alignItems:'center'
    },
    partner: {
        borderRadius: 12,
        backgroundColor: '#FFF',
        width: 75,
        height: 75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16
    },
    partnerTitle: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        marginTop: 4
    },
});

export default styles;