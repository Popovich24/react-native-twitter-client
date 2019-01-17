import {StyleSheet} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    flex: 1,
  },

  contentView: {
    flex: 0.8,
  },

  post: {
    borderBottomWidth: 1,
    borderColor: base.colors.borderPrimary,
    padding: base.spacings.S,
  },

});
