import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',  // затемненный фон,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    title: {
        color: '#0D0D0D',
        fontSize: 24,
        fontFamily: 'NotoSansMedium',
    },
    container: {
        left: 0,
        width: '100%',
        padding: 20,
        backgroundColor: '#FFF',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        bottom: 0,
        position: 'absolute',
        zIndex: 1000
    },
    selectorContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(31, 31, 31, 0.3)'
    },
    selectorText: {
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
    },
    selector: {
        width: 20,
        height: 20,
        borderColor: 'rgba(31, 31, 31, 1)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(225, 55, 55, 1)'
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '8@msr'
    },
    fieldTitle: {
        fontSize: '16@s',
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
        fontSize: '18@s',
        color: 'rgba(31, 31, 31)',
        fontFamily: 'NotoSans',
        width: '50%',
        marginTop: '4@msr'
    },
    button: {
        width: '100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E13737',
        borderRadius: 100,
    },
    buttonText: {
        fontSize: '24@s',
        color: "#FFF",
        fontFamily: 'NotoSans'
    },
    error: {
        fontSize: '18@s',
        color: '#E13737',
        textAlign: 'center',
        fontFamily: 'NotoSansLight',
        marginVertical: 6
    }
});

export default styles;