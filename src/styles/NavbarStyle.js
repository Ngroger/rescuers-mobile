import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    container: {
        paddingHorizontal: '24@msr',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        width: '100%',
        paddingTop: '24@msr',
        paddingBottom: '6@msr',
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: '20@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium',
        marginLeft: '12@msr'
    },
    logo: {
        height: '40@vs',
        width: '40@s',
        resizeMode: 'center'
    }
});

export default styles;