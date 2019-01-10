import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

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
      <View style={[ styles.row, styles.horizontalCentered ]}>
        <TouchableHighlight onPress={handleOnProfilePicPress}>
          <Image
            source={{uri: props.user.profile_image_url_https}}
            style={styles.profilePic}
          />
        </TouchableHighlight>
        <View style={styles.userName}>
          <Text style={styles.userNameText}> {props.user.name} </Text>
        </View>
      </View>
    </View>
  );
}

export default UserProfileHeadline

const styles = StyleSheet.create({
  banner:{
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
  },

  noBanner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
    backgroundColor: 'lightblue',
  },

  container: {
    flexDirection: 'column',
  },

  userName: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  userNameText: {
    fontSize: 16,
  },
  horizontalCentered: {
    justifyContent: 'center'
  },
  profilePic: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  row:{
    flexDirection: 'row',
  },
});
