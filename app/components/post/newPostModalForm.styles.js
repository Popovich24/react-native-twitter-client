import {StyleSheet, Dimensions} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: base.spacings.S,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: base.colors.textPrimary,
  },
  actionIcon: {
    color: base.colors.iconHighlight,
    fontSize: base.fontSizes.mediumIcon,
  },
  modalContainer: {
    flex: 0.7,
  },
  postTextInput: {
    textAlignVertical: 'top', // ANDROID-ONLY
    height: Dimensions.get('window').height/2,
    padding: base.spacings.S,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textInputContainer: {
    flex: 1,
  }
});
