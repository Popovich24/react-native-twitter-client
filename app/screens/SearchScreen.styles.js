import {StyleSheet} from 'react-native'
import base from '../components/base.styles.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.backgroundPrimary
  },
  activityIndicatorContainer:{
    backgroundColor: base.colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  trendTitle: {
    fontSize: base.fontSizes.title,
    marginLeft: base.spacings.S,
    marginBottom: base.spacings.M,
    color: base.colors.textPrimary,
  },
});
