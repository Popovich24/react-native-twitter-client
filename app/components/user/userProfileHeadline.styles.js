import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
  banner:{
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
  },

  noBanner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
    backgroundColor: 'lightblue',
  },

  container: {
    flexDirection: 'column',
  },

  userName: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  userNameText: {
    fontSize: 16,
  },
  horizontalCentered: {
    justifyContent: 'center'
  },
  row:{
    flexDirection: 'row',
  },
});
