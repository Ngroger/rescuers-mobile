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
    accordion: {
        borderBottomColor: 'rgba(31, 31, 31, 31, 0.5)',
        borderBottomWidth: 0.5,
        paddingVertical: 12
    },
    accordionContainer: {
        width: "100%",
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    question: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        width: '90%'
    },
    anwser: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 0.5)',
        fontFamily: 'NotoSans',
        marginTop: 6
    },
    buttonContainer: {
        position: 'absolute',
        zIndex: 1000,
        padding: 24,
        bottom: 0,
        width: '100%'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        borderRadius: 1000,
        padding: 16
    },
    buttonText: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans'
    }
});

export default styles;