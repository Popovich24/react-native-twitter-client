import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native'
import {styles} from './userProfilePicture.styles.js'
const UserProfilePicture = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Image
        source={{uri: props.user.profile_image_url_https}}
        style={styles.profilePic}
      />
    </TouchableHighlight>
  );
}

export default UserProfilePicture;
