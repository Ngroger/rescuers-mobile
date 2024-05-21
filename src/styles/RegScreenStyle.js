import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 145,
        position: 'absolute',
        zIndex: 1000,
        top: 0
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    goBack: {
        height: 35,
        width: 35,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10000,
        top: 30,
        left: 30
    },
    container: {
        paddingHorizontal: 24,
        width: '100%'
    },
    title: {
        fontSize: 28,
        fontFamily: 'NotoSansBold',
        color: '1F1F1F'
    },
    description: {
        fontSize: 18,
        color: '#1F1F1F',
        fontFamily: 'NotoSansLight'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: 12
    },
    fieldTitle: {
        fontSize: 18,
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
        fontSize: 20,
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '100%'
    },
    button: {
        width: '100%',
        padding: 16,
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 48
        },
    buttonText: {
        fontSize: 24,
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    footer: {
        width: '100%',
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        bottom: 0
    },
    checkBox: {
        borderColor: 'rgba(31, 31, 31, 0.3)',
        borderWidth: 1,
        height: 20,
        width: 20,
        borderRadius: 6
    },
    activeCheckbox: {
        backgroundColor: 'rgba(225, 55, 55, 1)',
        height: 20,
        width: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepsContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24
    },
    activeStep: {
        borderWidth: 1,
        borderColor: 'rgba(125, 143, 157, 1)',
        width: 50,
        height: 50,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 10000,
        backgroundColor: 'rgba(225, 55, 55, 1)'
    },
    line: {
        width: 100,
        backgroundColor: 'rgba(31, 31, 31, 0.3)',
        marginHorizontal: 12,
        height: 1
    },
    step: {
        width: 50,
        height: 50,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 10000,
        backgroundColor: 'rgba(31, 31, 31, 0.3)'
    },
});

export default styles;