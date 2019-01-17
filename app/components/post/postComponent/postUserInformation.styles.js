import {StyleSheet} from 'react-native'
import base from '../../base.styles.js'

export const styles = StyleSheet.create({

  usernameTitle: {
    flexDirection: 'row',
  },

  profileUsername: {
    fontSize: base.fontSizes.title,
    color: base.colors.textPrimary,
  },

  profileScreenName: {
    color: base.colors.textSecondary,
  },

  verifiedAccountIcon: {
    color: base.colors.iconPrimary,
    fontSize: base.fontSizes.smallIcon,
  }

});
