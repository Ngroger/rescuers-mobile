import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
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
    searchContainer: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: '12@msr',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: '16@msr'
    },
    search: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans',
        marginLeft: '6@msr',
        width: '70&'
    },
    filters: {
        paddingVertical: '12@msr'
    },
    filter: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    blog: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: '6@msr'
    },
    blogImage: {
        width: '70@s',
        height: '70@vs',
        backgroundColor: 'rgba(125, 143, 157, 1)',
        borderRadius: 12,
        resizeMode: 'cover'
    },
    blogInfo: {
        marginLeft: '12@msr'
    },
    blogTitle: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        flex: 1,
    },
    blogInfoText: {
        fontSize: '14@s',
        color: 'rgba(125, 143, 157, 1)',
        fontFamily: 'NotoSans',
        marginLeft: 4
    },
});

export default styles;