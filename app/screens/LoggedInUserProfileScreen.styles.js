import {StyleSheet} from 'react-native'
import base from '../components/base.styles.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.backgroundPrimary,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  activityIndicatorContainer:{
    backgroundColor: base.colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
