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
    },
    filters: {
        paddingVertical: '12@msr'
    },
    filter: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    journalCard: {
        width: '100%',
        padding: '12@msr',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        marginVertical: '6@msr'
    },
    journalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },  
    address: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans',
        width: '80%'
    },
    time: {
        color: 'rgba(31, 31, 31, 0.7)',
        fontSize: '14@s',
        fontFamily: 'NotoSans'
    },
    journalInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    status: {
        color: 'rgba(31, 31, 31, 0.7)',
        fontSize: '14@s',
        fontFamily: 'NotoSans'
    },
    numberOfJournal: {
        color: 'rgba(31, 31, 31, 1)',
        fontSize: '14@s',
        fontFamily: 'NotoSans'
    },
    currentStatus: {
        color: 'rgba(225, 55, 55, 0.8)',
        fontSize: '14@s',
        fontFamily: 'NotoSans',
        marginLeft: '4@s'
    },
    text: {
        color: 'rgba(31, 31, 31, 1)',
        fontSize: '14@s',
        fontFamily: 'NotoSans'
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
        marginLeft: '6@msr'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        marginVertical: '8@msr'
    },
    photoProfile: {
        height: 40,
        width: 40,
        backgroundColor: '#BDBDBD',
        borderRadius: 1000
    },
    fullname: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansMedium'
    },
    number: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 0.3)',
        fontFamily: 'NotoSans',
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '12@msr'
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
        width: '100%'
    },
    buttonContainer: {
        width: '100%',
        padding: 16,
        position: 'absolute',
        zIndex: 100,
        bottom: 0
    },
    button: {
        justifyContent :'center',
        alignItems: 'center',
        backgroundColor: 'rgba(225, 55, 55, 1)',
        marginBottom: 12,
        padding: 16,
        borderRadius: 1000
    },
    buttonText: {
        fontSize: '18@s',
        color: '#FFF',
        fontFamily: 'NotoSans'
    }
});

export default styles;