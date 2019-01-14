import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const PostButton = (props) => {
  return (
    <TouchableHighlight style={styles.newTweetButton} onPress={props.onPress}>
      <Ionicons name="ios-add" size={32} color="white" />
    </TouchableHighlight>
  );
}

export default PostButton;

const styles = StyleSheet.create({
  newTweetButton: {
    width: 60,
    height: 60,
    elevation: 1,
    borderRadius: 30,
    backgroundColor: '#1FBFFF',
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
