import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import {styles} from './postContent.styles.js'

export const PostContent = (props) => {
  return (
    <Text style={styles.postContent}>
      {props.post.text}
    </Text>
  );
}
