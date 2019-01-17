import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import UserProfilePicture from './userProfilePicture'
import {styles} from './userProfileHeadline.styles.js'

const UserProfileHeadline = (props) => {

  const handleOnProfilePicPress = () => {
    props.onProfilePicPress();
  }

  return (
    <View style={styles.container}>
      {props.user.profile_banner_url &&
        <Image
          source={{uri: props.user.profile_banner_url}}
          style={styles.banner}
        />
      }
      {!props.user.profile_banner_url &&
        <View style={styles.noBanner}>
        </View>
      }
      <View style={styles.row}>
        <UserProfilePicture
          onPress={handleOnProfilePicPress}
          user={props.user}
        />
        <View style={styles.userName}>
          <Text style={styles.userNameText}> {props.user.name} </Text>
        </View>
      </View>
    </View>
  );
}

export default UserProfileHeadline
