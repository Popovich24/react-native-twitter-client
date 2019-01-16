import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, Animated } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from './postButton.styles.js'

const PostButton = (props) => {
  return (
    <TouchableHighlight style={styles.newTweetButton} onPress={props.onPress}>
      <Ionicons name="ios-add" size={32} color="white" />
    </TouchableHighlight>
  );
}

export default PostButton;
