'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from './profilePicturePreviewer.styles.js'

const ProfilePicturePreviewer = (props) => {

  return (
    <View style={styles.previewContainer}>
      <Image
        style={styles.previewImage}
        source={{uri: props.picture.uri}}
      />
      <View style={styles.previewActionsContainer}>
        <Ionicons name="ios-close" style={styles.icon} onPress={props.onRejectProfilePictureChange} size={styles.actionIcon.fontSize} color={styles.actionIcon.color}/>
        <Ionicons name="ios-checkmark" style={styles.icon} onPress={props.onAcceptProfilePictureChange} size={styles.actionIcon.fontSize} color={styles.actionIcon.color}/>
      </View>
    </View>
  );
}

export default ProfilePicturePreviewer
