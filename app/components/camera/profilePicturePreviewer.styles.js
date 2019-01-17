import {StyleSheet, Dimensions} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
  },
  actionIcon: {
    fontSize: base.fontSizes.bigIcon,
    color: base.colors.iconTertiary,
  },
  previewImage: {
    flex: 0.8,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  previewActionsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
});
