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
    field: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        paddingVertical: 6
    },
    fieldTitle: {
        fontSize: 16,
        color: 'rgba(31, 31, 31, 0.7)',
        fontFamily: 'NotoSans'
    },
    input: {
        fontSize: 18,
        color: '#1F1F1F',
        fontFamily: 'NotoSans'
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
    }
});

export default styles;