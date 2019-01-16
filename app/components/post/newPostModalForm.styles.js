import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#1183ff'
  },
  modalContainer: {
    flex: 0.7,
  },
  postTextInput: {
    textAlignVertical: 'top', // ANDROID-ONLY
    height: Dimensions.get('window').height/2,
    padding: 10,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textInputContainer: {
    flex: 1,
    padding: 5
  }
});
