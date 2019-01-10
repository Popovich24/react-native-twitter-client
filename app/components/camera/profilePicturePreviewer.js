'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfilePicturePreviewer = (props) => {

  return (
    <View style={styles.previewContainer}>
      <Image
        style={styles.previewImage}
        source={{uri: props.picture.uri}}
      />
      <View style={styles.previewActionsContainer}>
        <Ionicons name="ios-close" style={styles.icon} onPress={props.onRejectProfilePictureChange} size={80} color="#1183ff"/>
        <Ionicons name="ios-checkmark" style={styles.icon} onPress={props.onAcceptProfilePictureChange} size={80} color="#1183ff"/>
      </View>
    </View>
  );
}

export default ProfilePicturePreviewer

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
  },
  previewImage: {
    flex: 0.8,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  previewActionsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
});
