import {StyleSheet} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  socialInteractionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: base.spacings.M,
    paddingLeft: base.spacings.L,
    paddingRight: base.spacings.L,
  },

  socialInteractionElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  socialInteractionText: {
    color: base.colors.textPrimary,
    margin: base.spacings.S,
    fontSize: base.fontSizes.normal,
  },

  socialInteractionIcon: {
    fontSize: base.fontSizes.mediumIcon,
    color: base.colors.iconSecondary,
  },
});
