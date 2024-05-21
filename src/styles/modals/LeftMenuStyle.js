import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',  // затемненный фон
    },
    buttonBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    title: {
        color: '#0D0D0D',
        fontSize: 24,
        fontFamily: 'PopinsBold',
    },
    container: {
        height: '100%',
        left: 0,
        width: '70%',
        padding: 20,
        backgroundColor: '#FFF',
    },
    header: {
        width: '100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 70,
        height: 70
    },
    logoText: {
        marginTop: 6,
        fontSize: 28,
        fontFamily: 'NotoSansBlack'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    photoProfile: {
        height: 40,
        width: 40,
        backgroundColor: '#BDBDBD',
        borderRadius: 1000
    },
    fullname: {
        fontSize: 24,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium'
    },
    typeOfAccount: {
        fontSize: 18,
        color: 'rgba(31, 31, 31, 0.3)',
        fontFamily: 'NotoSans'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        paddingVertical: 6,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'NotoSansMedium',
        marginLeft: 6,
        color: 'rgba(31, 31, 31, 1)'
    }
});

export default styles;