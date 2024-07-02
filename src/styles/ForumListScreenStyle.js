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
        alignItems: 'center'
    },
    header: {
        width: '100%',
        paddingHorizontal: '24@msr',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '64@msr',
    },
    title: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 0.3)',
        fontFamily: 'NotoSans'
    },
    map: {
        width: '100%',
        height: '300@vs',
    },
    writeTread: {
        width: '20@s',
        height: '20@vs',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        borderRadius: 1000,
        marginLeft: '6@msr'
    },
    tread: {
        width: '100%',
        padding: '12@msr',
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginVertical: '6@msr',
        borderRadius: 12,
        flexDirection: 'row',
        display: 'flex',
    },
    treadTitle: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        width: '85%'
    },
    commentsCount: {
        fontSize: '14@s',
        marginLeft: '4@msr',
        color: 'rgba(31, 31, 31, 0.3)',
        fontFamily: 'NotoSans'
    },
    author: {
        fontSize: '16@s',
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 0.3)'
    },
    date: {
        fontSize: '16@s',
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 0.3)'
    },
});

export default styles;