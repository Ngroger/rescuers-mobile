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
        marginTop: '64@msr'
    },
    header: {
        width: '100%',
        paddingHorizontal: '24@msr',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '56@msr',
    },
    title: {

    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: '#BDBDBD',
        marginTop: 12
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    photoProfile: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(125, 143, 157, 1)',
        borderRadius: 1000
    },
    fullname: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
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
    description: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        marginTop: '8@msr'
    },
    commentDescription: {
        fontSize: '16@msr',
        fontFamily: 'NotoSans',
        marginTop: '6@msr'
    },
    readMoreButton: {
        marginVertical: '6@msr',
        marginBottom: 124
    },
    readMoreButtonText: {
        textAlign: 'center',
        fontSize: '18@s',
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 0.5)',
        textDecorationLine: 'underline',
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
        alignSelf: 'flex-start',
        width: '90%'
    },
    messageContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 100,
        bottom: 0,
        backgroundColor: '#FFF',
        paddingHorizontal: '24@msr',
        paddingBottom: '24@msr'
    }
});

export default styles;