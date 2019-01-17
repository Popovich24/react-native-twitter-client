import {StyleSheet, Dimensions} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  banner:{
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
  },

  noBanner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
    backgroundColor: base.colors.backgroundSecondary,
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
    fontSize: base.fontSizes.title,
    color: base.colors.textPrimary,
  },
  row:{
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
