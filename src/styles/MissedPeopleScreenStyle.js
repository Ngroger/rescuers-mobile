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
    },
    filter: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    card: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        marginVertical: '6@msr'
    },
    photo: {
        width: '80@s',
        height: '80@vs',
        borderRadius: 12,
        backgroundColor: '#BDBDBD'
    },
    fullname: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    description: {
        fontSize: '12@s',
        color: 'rgba(31, 31, 31, 0.5)',
        fontFamily: 'NotoSans'
    },
    info: {
        fontSize: '12@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    photoProfile: {
        width: '50@s',
        height: '50@vs',
        backgroundColor: 'rgba(125, 143, 157, 1)',
        borderRadius: 1000
    },
    typeOfAccount: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    comment: {
        marginVertical: '6@msr'
    },
    date: {
        fontSize: '20@s',
        color: 'rgba(31, 31, 31, 0.3)',
        fontFamily: 'NotoSans',
        marginTop: '8@msr'
    },
    title: {
        fontSize: '20@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium',
        marginTop: '8@msr'
    },
    photoPreview: {
        width: '100%',
        height: '200@vs',
        backgroundColor: '#BDBDBD',
        marginVertical: '12@msr'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '6@msr'
    },
    fieldTitle: {
        fontSize: '16@s',
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
        width: '100%',
        marginTop: '2@msr'
    },
    button: {
        width: '100%',
        padding: '16@msr',
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '24@msr'
    },
    buttonText: {
        fontSize: '20@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    addIcon: {
        width: '20@s',
        height: '20@vs',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        marginLeft: '6@msr'
    }
});

export default styles;