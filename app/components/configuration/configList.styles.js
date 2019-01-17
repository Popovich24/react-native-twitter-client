import {StyleSheet} from 'react-native';
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.backgroundPrimary,
  },
  titleView: {
    height: 50,
    backgroundColor: base.colors.backgroundSecondary,
    marginBottom: base.spacings.XS,
    paddingLeft: base.spacings.S,
    justifyContent: 'center',
  },
  titleText: {
    color: base.colors.textTertiary,
    fontSize: base.fontSizes.title,
  }
});
