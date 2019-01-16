import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import PostList from './../post/postList'
import UserProfileHeadline from './userProfileHeadline'
import {styles} from './userProfile.styles.js'

const UserProfile = (props) => {
  return (
    <ScrollView styles={styles.userContainer}>
      <UserProfileHeadline
        onProfilePicPress={props.onProfilePicPress}
        user={props.user}
        styles={styles.userProfile}
        navigation={props.navigation}
      />
      <View style={styles.separator} />
      {props.data &&
        <PostList
          style={styles.postList}
          navigation={props.navigation}
          data={props.data}
          refreshing={false}
          onRefresh={() => {}}
          onEndReached={() => {}}
        />
      }
      {(!props.data || props.data.length === 0) &&
        <View style={styles.textBanner}>
          <Text>No tweets available</Text>
        </View>
      }
    </ScrollView>
  );
}

export default UserProfile
