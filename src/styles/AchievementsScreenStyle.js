import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    container: {
        width: '100%',
        paddingHorizontal: '24@msr'
    },
    navbar: {
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '24@msr',
        paddingTop: '24@msr'
    },
    goBack: {
        height: '26@vs',
        width: '26@s',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: '20@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        marginLeft: 6
    },
    image: {
        position: 'absolute',
        top: '73%',
        left: '73%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        borderColor: '#000'
    },
    achievement: {
        flexDirection: 'row',
        display: 'flex',
        marginVertical: '6@msr'
    },
    achievementInfo: {
        flex: 1,
        marginLeft: '6@msr'
    },
    achievementTitle: {
        fontSize: '16@msr',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        alignSelf: 'flex-start'
    },
    achievementSubtitle: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        flex: 1
    },
    progress: {
        alignItems: 'flex-end'
    },
    progressText: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
    },
    progressBar: {
        width: '100%',
        borderRadius: 1000,
        backgroundColor: "rgba(31, 31, 31, 0.5)",
        marginTop: '4@msr'
    },
    bar: {
        width: '1%',
        borderRadius: 1000,
        backgroundColor: "rgba(225, 55, 55, 1)",
        padding: '2@msr'
    },
});

export default styles;