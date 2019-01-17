import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import {styles} from './postProfilePicture.styles.js'

export const PostProfilePicture = (props) => {
  return (
    <View style={styles.profileView}>
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={props.onProfilePicPress}
      >
        <Image
          fadeDuration={0}
          source={{uri: props.user.profile_image_url_https}}
          style={styles.profilePic}/>
      </TouchableHighlight>
    </View>
  );
}
