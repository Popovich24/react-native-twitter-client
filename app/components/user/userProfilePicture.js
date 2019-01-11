import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

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

const styles = StyleSheet.create({
  profilePic: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
