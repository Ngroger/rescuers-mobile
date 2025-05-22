import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        paddingHorizontal: '24@msr',
        marginTop: '56@msr'
    },
    title: {
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans',
        fontSize: '18@s',
        marginVertical: '12@msr'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '8@msr',
        marginBottom: '12@msr'
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
        width: '90%',
        marginTop: '4@msr'
    },
    button: {
        width: '48%',
        padding: '16@msr',
        borderRadius: 16,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: '12@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
});

export default styles;