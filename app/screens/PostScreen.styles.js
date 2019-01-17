import {StyleSheet} from 'react-native'
import base from '../components/base.styles.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.backgroundPrimary,
    paddingTop: base.spacings.S
  },
  activityIndicatorContainer:{
    backgroundColor: base.colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
