import {StyleSheet} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  mediaView: {
    marginBottom: base.spacings.S,
  },
  postImage: {
    borderRadius: 10,
    resizeMode: 'contain',
    height: 250
  },
  dateView: {
    paddingTop: base.spacings.S,
    marginBottom: base.spacings.S,
    justifyContent: 'center',
  },
});
