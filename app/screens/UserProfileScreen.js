'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';
import {requestUserProfile} from '../store/user/userActions'
import UserProfile from './../components/user/userProfile'
import PostList from './../components/post/postList'
import {styles} from './UserProfileScreen.styles.js'

export class UserProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: -1,
    }
  }

  componentDidMount = () => {
    const userId = this.props.navigation.getParam('userId', 'NO-ID');
    this.setState({
      userId: userId,
    });

    this.props.requestUserProfile(userId);
  }

  render = () => {
    return (
     <View style={styles.container}>
       {(this.props.isLoadingUserProfile || this.props.isLoadingUserProfilePost) &&
         <View style={styles.activityIndicatorContainer}>
           <ActivityIndicator animating={true}/>
         </View>
       }
       {!this.props.isLoadingUserProfile && !this.props.isLoadingUserProfilePost &&
         <View style={styles.userContainer}>
           <UserProfile
             onProfilePicPress={() => {}}
             user={this.props.user}
             navigation={this.props.navigation}
             data={this.props.userProfilePost}
             refreshing={false}
             onRefresh={() => {}}
             onEndReached={() => {}}
            />
        </View>
       }

     </View>
    );
  }

}

function mapStateToProps(state, props) {
    return {
      isLoadingUserProfile: state.UserReducer.isLoadingUserProfile,
      user: state.UserReducer.user,

      userProfilePost: state.PostReducer.userProfilePost,
      isLoadingUserProfilePost: state.PostReducer.isLoadingUserProfilePost,
    }
}

const mapDispatchToProps = {
  requestUserProfile: (userId) => requestUserProfile(userId),
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
