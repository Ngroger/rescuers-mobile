import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    navbar: {
        width: '100%',
        height: '145@vs',
        position: 'absolute',
        zIndex: 1000,
        top: 0
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: '24@msr',
        width: '100%',
        marginTop: '56@msr'
    },
    title: {
        fontSize: '20@s',
        fontFamily: 'NotoSansBold',
        color: '1F1F1F'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '12@msr'
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
        width: '100%'
    },
    button: {
        width: '100%',
        padding: '16@msr',
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '48@msr'
        },
    buttonText: {
        fontSize: '20@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
});

export default styles;