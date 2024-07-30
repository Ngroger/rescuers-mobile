import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    navbar: {
        width: '100%',
        height: '120@vs',
        position: 'absolute',
        zIndex: -100,
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
        paddingHorizontal: '24@msr',
        width: '100%'
    },
    title: {
        fontSize: '20@s',
        fontFamily: 'NotoSansBold',
        color: '1F1F1F'
    },
    description: {
        fontSize: '16@s',
        color: '#1F1F1F',
        fontFamily: 'NotoSansLight'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '12@msr'
    },
    fieldTitle: {
        fontSize: '14@s',
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
        fontSize: '16@s',
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '100%',
    },
    button: {
        width: '100%',
        padding: '16@msr',
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '48@msr',
        zIndex: 1000
    },
    buttonText: {
        fontSize: '20@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
    },
    footer: {
        width: '100%',
        height: '120@vs',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -1000,
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
        marginBottom: '24@msr'
    },
    activeStep: {
        borderWidth: 1,
        borderColor: 'rgba(125, 143, 157, 1)',
        width: 40,
        height: 40,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeDot: {
        width: '8@s',
        height: '8@vs',
        borderRadius: 10000,
        backgroundColor: 'rgba(225, 55, 55, 1)'
    },
    line: {
        width: '15%',
        backgroundColor: 'rgba(31, 31, 31, 0.3)',
        marginHorizontal: '12@msr',
        height: '1@vs'
    },
    step: {
        width: 40,
        height: 40,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        width: '8@s',
        height: '8@vs',
        borderRadius: 10000,
        backgroundColor: 'rgba(31, 31, 31, 0.3)'
    },
    errorMessage: {
        fontSize: 16,
        color: '#FF0000',
        textAlign: 'center',
        fontFamily: 'NotoSans'
    },
    fileContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fileButton: {
        width: 70,
        height: 70,
        borderRadius: 1000,
        backgroundColor: '#E13737',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;