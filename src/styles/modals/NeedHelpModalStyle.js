import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        fontFamily: 'PopinsBold',
    },
    container: {
        left: 0,
        width: '90%',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'NotoSansMedium',
        color: 'rgba(31, 31, 31, 1)',
        width: 300
    },
    description: {
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        textAlign: 'center',
        marginVertical: 12
    },
    button: {
        paddingVertical: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1
    },
    buttonText: {
        fontSize: 20,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    }
});

export default styles;