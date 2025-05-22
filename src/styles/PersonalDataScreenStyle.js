import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    container: {
        width: '100%',
        paddingHorizontal: '24@msr',
    },
    logout: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans'
    },
    navbar: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '24@msr',
        paddingTop: '24@msr'
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
        fontSize: '20@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        marginLeft: '6@msr'
    },
    photoProfileContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '12@msr'
    },
    photoProfile: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        borderRadius: 1000
    },
    typeOfAccount: {
        width: '48%',
        padding: '16@msr',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    typeOfAccountText: {
        fontSize: '16@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '8@msr'
    },
    fieldTitle: {
        fontSize: '16@msr',
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
        fontSize: '18@s',
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '100%'
    },
    buttonContainer: {
        position: 'absolute',
        zIndex: 100,
        bottom: 0,
        padding: 20,
        width: '100%'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E13737',
        borderRadius: 1000,
        padding: 20
    },
    buttonText: {
        fontSize: '18@s',
        color: "#FFF",
        fontFamily: 'NotoSans'
    }
});

export default styles;