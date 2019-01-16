import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    justifyContent: 'space-evenly',
    paddingTop: 17,
    paddingLeft: 5,
    paddingRight: 5,
  },
  icon: {
    padding: 5,
  },
  searchTextInput: {
    flex: 1,
    fontSize: 17,
    padding: 5,
    marginLeft: 3
  },
  searchButton: {
    flex: 0.25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1FBFFF',
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  textInputView: {
    flex: 0.65,
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    padding: 1,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
