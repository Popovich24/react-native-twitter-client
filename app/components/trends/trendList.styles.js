import {StyleSheet} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  trend: {
    borderBottomWidth: 1,
    borderColor: base.colors.borderPrimary,
    flexDirection: 'row',
    padding: base.spacings.S,

  },
  trendText: {
    fontSize: base.fontSizes.title,
    marginBottom: base.spacings.XS
  },
  trendTextView: {
    flex: 0.9,
    paddingLeft: base.spacings.S,
  },
  trendNumber: {
    fontSize: base.fontSizes.title,
    color: base.colors.textPrimary
  },
  trendNumberView: {
    flex: 0.1,
    paddingLeft: base.spacings.XS,
  },
  volumeText: {
    fontSize: base.fontSizes.normal,
    color: base.colors.textPrimary,
  }
});
