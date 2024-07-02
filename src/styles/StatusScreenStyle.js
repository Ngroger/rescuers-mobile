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
        marginTop: 64
    },
    title: {
        fontFamily: 'NotoSans',
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 0.7)'
    },
    footer: {
        width: '100%',
        height: '145@vs',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0
    },
    statusContainer: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 24
    },
    statusButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor :'#E13737',
        borderRadius: 12,
        width: '48%',
        padding: 16
    },
    statusText: {
        fontSize: '20@s',
        fontFamily: 'NotoSans',
        color: "#FFF"
    },
    buttonsContainer: {
        position: 'absolute',
        zIndex: 1000,
        padding: 16,
        bottom: 0,
        width: '100%'
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E13737',
        borderRadius: 100,
        marginBottom: 12,
        padding: 16
    },
    buttonText: {
        fontSize: '20@s',
        fontFamily: 'NotoSans',
        color: "#FFF"
    }
});

export default styles;