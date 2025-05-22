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
    messageContainer: {
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 12
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
        alignSelf: 'flex-start',
        width: '90%'
    },
    messages: {
        flex: 1,
        flexGrow: 1,
        width: '100%'
    },
    message: {
        paddingHorizontal: 24,
        marginVertical: 10
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    fullname: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium'
    },
    typeOfAccount: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 0.5)',
        fontFamily: 'NotoSans'
    },
    techImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'rgba(231, 95, 95, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoProfile: {
        width: 50,
        height: 50,
        backgroundColor: '#BDBDBD',
        borderRadius: 10000
    },
    messageCard: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: 'rgba(125, 143, 157, 1)',
        maxWidth: '80%', // Ensure the card doesn't exceed 80% of the screen width
        flexShrink: 1,  // Allow shrinking if necessary
    },
    messageText: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
        flexWrap: 'wrap', // Allow text to wrap
    },
    time: {
        marginRight: 6,
        fontSize: 16,
        color: 'rgba(31, 31, 31, 0.5)',
        fontFamily: 'NotoSans',
        alignSelf: 'flex-end', // Ensure the time aligns at the top of the message
    }
});

export default styles;