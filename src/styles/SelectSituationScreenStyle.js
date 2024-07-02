import { ScaledSheet } from "react-native-size-matters";

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
    categoryContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginVertical: '6@msr'
    },
    categoryIconContainer: {
        height: 90,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'rgba(250, 63, 63, 0.5)',
        backgroundColor: 'rgba(250, 63, 63, 1)',
        borderRadius: 16
    },
    categoryIcon: {
        width: '70%',
        height: '70%',
        resizeMode: 'center'
    },
    categoryText: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        marginLeft: '12@msr'
    },
});

export default styles;