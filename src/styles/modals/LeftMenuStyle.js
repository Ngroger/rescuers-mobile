import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',  // затемненный фон,
        width: '100%',
        position: 'absolute',
        zIndex: 100000
    },
    navbar: {
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        height: 160,
        opacity: 0.5
    },
    buttonBack: {
        position: 'absolute',
        zIndex: 100000000,
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
        backgroundColor: '#FFF',
        position: 'absolute',
        zIndex: 100000000000,
    },
    header: {
        width: '100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10000000000,
        marginTop: 12
    },
    logo: {
        width: 70,
        height: 70,
    },
    logoText: {
        marginTop: 6,
        fontSize: 28,
        fontFamily: 'NotoSansBlack'
    },
    imageCat: {
        width: 17,
        height: 17
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
    },
    partners: {
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex', 
        flexDirection: 'row',
    }
});

export default styles;