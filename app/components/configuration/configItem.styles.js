import {StyleSheet} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  configItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: base.colors.borderPrimary,
    padding: base.spacings.S,
    alignItems: 'center',
  },
  configText: {
    color: base.colors.textPrimary,
    fontSize: base.fontSizes.normal,
  },
  configCheckBox: {
  },
  configTextView: {
    flex: 0.9,
  },
  checkboxView: {
    flex: 0.1,
  }
});
