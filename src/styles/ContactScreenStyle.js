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
        marginTop: 12
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
    address: {
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    number: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    company: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans',
        marginLeft: 6
    },
    mail: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans',
        marginTop: 4
    },
    site: {
        fontSize: 16,
        color: 'rgba(10, 49, 255, 1)',
        fontFamily: 'NotoSans',
        marginTop: 4
    },
    mediaContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 100,
        padding: 24,
        bottom: 0
    },
    media: {
        margin: 6,
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    }
});

export default styles;