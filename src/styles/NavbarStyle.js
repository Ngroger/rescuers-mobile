import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        width: '100%'
    },
    title: {
        fontSize: 24,
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium',
        marginLeft: 12
    },
    logo: {
        height: 50,
        width: 50
    }
});

export default styles;