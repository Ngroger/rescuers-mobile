import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    container: {
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 64
    },
    filters: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    },
    filter: {
        fontSize: 20,
        color: '#1F1F1F',
        fontFamily: 'NotoSans'
    },
    disaster: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: '6@msr'
    },
    disasterImage: {
        width: '70@s',
        height: '70@vs',
        backgroundColor: 'rgba(125, 143, 157, 1)',
        borderRadius: 12,
        resizeMode: 'cover'
    },
    disasterInfo: {
        marginLeft: '12@msr'
    },
    disasterTitle: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        flex: 1,
    },
    disasterInfoText: {
        fontSize: '14@s',
        color: 'rgba(125, 143, 157, 1)',
        fontFamily: 'NotoSans',
        marginLeft: 4
    },
    buttonContainer: {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        padding: 24,
        bottom: 0
    },
    button: {
        width: '100%',
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#E13737',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'NotoSans'
    }
});

export default styles