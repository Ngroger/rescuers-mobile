import { ScaledSheet } from "react-native-size-matters";

const createStyles = (color) => ScaledSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: color.background,
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
    height: 26,
    width: 26,
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
  infoContainer: {
    marginBottom: 12
  },
  infoTitle: {
    fontFamily: 'NotoSans',
    fontSize: '18@s',
    color: color.text
  },
  infoText: {
    fontFamily: 'NotoSans',
    fontSize: '14@s',
    color: color.thinText
  }
});

export default createStyles;