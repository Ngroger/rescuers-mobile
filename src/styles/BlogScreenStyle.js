import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    goBack: {
        height: 26,
        width: 26,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        position: 'absolute',
        zIndex: 1000,
        top: '30@msr',
        left: '30@msr'
    }, 
    title: {
        position: 'absolute',
        zIndex: 1000,
        left: '30@msr',
        top: '70@msr',
        fontSize: '20@s',
        width: '80%',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSansMedium'
    },
    goBackText: {
        fontSize: '16@s',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'NotoSans',
        marginLeft: '6@msr'
    },
    backgroundImage: {
        width: '100%',
        height: '200@vs',
        backgroundColor: 'rgba(125, 143, 157, 1)',
        position: 'absolute',
    },
    container: {
        flex: 1, // This allows the container to take up the remaining space
        paddingHorizontal: '24@msr',
        marginTop: '150@msr',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        zIndex: 10000,
    },
    scrollContainer: {
        paddingVertical: '16@msr', // Add some padding for scroll content
    },
    blogTitle: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium'
    },
    videoContainer: {
        backgroundColor: 'rgba(125, 143, 157, 1)',
        width: '100%',
        height: '176@msr',
        borderRadius: 18,
        marginVertical: '16@msr'
    },
    blogDescription: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        textAlign: 'center',
        marginTop: 6
    }
});

export default styles;
