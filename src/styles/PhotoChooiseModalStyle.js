import { StyleSheet } from "react-native";

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
});

export default styles;