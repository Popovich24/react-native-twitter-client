import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from './postUserInformation.styles.js'

export const PostUserInformation = (props) => {
  return (
    <View style={styles.usernameTitle}>
      <Text style={styles.profileUsername}>{props.user.name}</Text>
      {props.user.verified === true &&
        <Ionicons name="ios-checkmark-circle" style={styles.verifiedAccountIcon} size={styles.verifiedAccountIcon.fontSize} color={styles.verifiedAccountIcon.color} />
      }
      <Text style={styles.profileScreenName}> @{props.user.screen_name}</Text>
    </View>
  );
}
