import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import PostList from './../post/postList'
import UserProfileHeadline from './userProfileHeadline'

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

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  textBanner: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  userProfile: {
    marginBottom: 5,
  },
  postList: {
    marginTop: 5,
  },
});
