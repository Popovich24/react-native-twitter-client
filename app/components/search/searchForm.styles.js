import { StyleSheet } from 'react-native';
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: base.colors.backgroundPrimary,
    justifyContent: 'space-evenly',
    paddingTop: base.spacings.M,
    paddingLeft: base.spacings.XS,
    paddingRight: base.spacings.XS,
  },
  icon: {
    padding: base.spacings.XS,
    color: base.colors.textSecondary,
    fontSize: base.fontSizes.mediumIcon,
  },
  searchTextInput: {
    flex: 1,
    fontSize: base.fontSizes.title,
    padding: base.spacings.XS,
    marginLeft: base.spacings.XS
  },
  searchButton: {
    flex: 0.25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: base.colors.backgroundSecondary,
    borderRadius: 5,
  },
  searchButtonText: {
    color: base.colors.textTertiary,
    fontSize: base.fontSizes.M,
  },
  textInputView: {
    flex: 0.65,
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: base.colors.borderPrimary,
    paddingLeft: base.spacings.XS,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
