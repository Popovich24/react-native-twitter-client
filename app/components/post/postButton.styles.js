import { StyleSheet } from 'react-native';
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  newTweetButton: {
    width: 60,
    height: 60,
    elevation: 1,
    borderRadius: 30,
    backgroundColor: base.colors.iconHighlight,
    position: 'absolute',
    bottom: base.spacings.S,
    right: base.spacings.S,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newTweetIcon: {
    fontSize: base.fontSizes.mediumIcon,
    color: base.colors.iconTertiary,
  }
});
