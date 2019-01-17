import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from './socialInteraction.styles.js'

const SocialInteraction = (props) => {
  return (
    <View style={styles.socialInteractionContainer}>
      <View style={styles.socialInteractionElement}>
        <Ionicons name="ios-heart-empty" size={styles.socialInteractionIcon.fontSize} color={styles.socialInteractionIcon.color} />
        <Text style={styles.socialInteractionText}>{props.favoriteCount}</Text>
      </View>
      <View style={styles.socialInteractionElement}>
        <Ionicons name="ios-chatboxes" size={styles.socialInteractionIcon.fontSize} color={styles.socialInteractionIcon.color} />
        <Text style={styles.socialInteractionText}>0</Text>
      </View>
      <View style={styles.socialInteractionElement}>
        <Ionicons name="ios-share-alt" size={styles.socialInteractionIcon.fontSize} color={styles.socialInteractionIcon.color} />
        <Text style={styles.socialInteractionText}>{props.retweetCount}</Text>
      </View>
    </View>
  );
}

export default SocialInteraction
