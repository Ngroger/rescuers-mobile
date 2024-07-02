import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    container: {
        width: '100%',
        paddingHorizontal: '24@msr',
        alignItems: 'center'
    },
    title: {
        fontSize: '18@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSansBold'
    },
    map: {
        width: '100%',
        height: '300@vs',
    },
    field: {
        width: '100%',
        borderBottomColor: 'rgba(31, 31, 31, 0.3)',
        borderBottomWidth: 1,
        paddingVertical: '6@msr'
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
        width: '50%'
    },
    cityContainer: {
        marginVertical: 2
    },
    city: {
        fontSize: '18@s',
        fontFamily: 'NotoSans',
        color: 'rgba(31, 31, 31, 0.3)'
    },
    educationCenter: {
        padding: '12@msr',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 0.5,
        borderColor: 'rgba(31, 31, 31, 0.3)',
        marginVertical: '6@msr',
        borderRadius: 12
    },
    selectedEducationCenter: {
        padding: '12@msr',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 0, 38, 1)',
        marginVertical: '6@msr',
        borderRadius: 12
    },
    educationHeader: {
        flexDirection: "row",
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    address: {
        fontSize: '16@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    schedule: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 0.3)',
        fontFamily: 'NotoSans'
    },
    educationInfo: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    phoneNumber: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 0.3)',
        marginVertical: 2
    },
    mail: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 0.5)',
        marginBottom: 2
    },
    site: {
        fontSize: '14@s',
        color: 'rgba(10, 49, 255, 1)',
        marginBottom: 2
    },
    mediaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        marginTop: '4@msr'
    },
    media: {
        width: '35@s',
        height: '35@msr',
        borderRadius: 1000,
        backgroundColor: 'rgba(225, 55, 55, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    entitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
    },
    entity: {
        fontSize: '14@s',
        color: 'rgba(31, 31, 31, 1)',
        fontFamily: 'NotoSans'
    },
    emptyListText: {
        fontSize: 16,
        color: 'rgba(13, 13, 13, 1)',
        fontFamily: 'NotoSans',
        textAlign: 'center'
    }
});

export default styles;