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
        marginTop: '60@msr'
    },
    title: {
        fontSize: 24,
        color: '#1F1F1F',
        fontFamily: 'NotoSansSemibold'
    },
    typeContainer: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 12
    },
    typeButton: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#E13737',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    typeText: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'NotoSans'
    },
    field: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        paddingVertical: 6,
        width: '100%'
    },
    fieldTitle: {
        fontSize: '16@s',
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 1)'
    },
    input: {
        fontSize: '18@s',
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 1)'
    },
    photoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        marginTop: 4
    },
    photoSelect: {
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 12,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhoto: {
        width: 30,
        height: 30,
        borderRadius: 1000,
        backgroundColor: '#E13737',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100
    },
        buttonContainer: {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        padding: 24,
        bottom: 0
    },
    selectedImageContainer: {
        width: 70,
        height: 70,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12
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
        padding: 16,
        borderRadius: 100,
        backgroundColor: '#E13737',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'NotoSans'
    },
});

export default styles;