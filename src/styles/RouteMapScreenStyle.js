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
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '12@msr',
        marginBottom: '12@msr'
    },
    fieldTitle: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans'
    },
    fieldContainer: {
        width: '100%',
    },
    input: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '95%',
        marginTop: 4
    },
    mapContainer: {
        width: '100%',
        height: 'auto',
        borderColor: '#000',
        flex: 1
    },
    map: {
        width: '100%',
        height: '100%',
    },
    myLocation: {
        width: 50,
        height: 50,
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1000,
        top: 20,
        right: 20
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 1000,
        bottom: 24,
        paddingHorizontal: '24@msr'
    },
    button: {
        width: '100%',
        padding: '16@msr',
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: '20@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    photoRescuer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#E13737'
    }
});

export default styles;