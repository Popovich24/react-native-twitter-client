import {StyleSheet, Dimensions,} from 'react-native';
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  cameraActionsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  actionIcon: {
    fontSize: base.fontSizes.bigIcon,
    color: base.colors.iconTertiary,
  },
  preview: {
    flex: 0.8,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#1FBFFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  captureText: {
    color: base.colors.textTertiary,
    fontSize: base.fontSizes.title,
  }
});
