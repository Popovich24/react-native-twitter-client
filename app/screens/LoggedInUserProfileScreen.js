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
import {requestLoggedInUserProfile} from '../store/user/userActions'
import UserProfile from './../components/user/userProfile'
import PostList from './../components/post/postList'

export class UserProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.requestLoggedInUserProfile();
  }

  handleOnProfilePicPress = () =>{
    this.props.navigation.navigate('Camera');
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
             onProfilePicPress={this.handleOnProfilePicPress}
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

UserProfileScreen.navigationOptions = {
  header: null
};

function mapStateToProps(state, props) {
    return {
      isLoadingUserProfile: state.UserReducer.isLoadingLoggedInUserProfile,
      user: state.UserReducer.loggedInUser,

      userProfilePost: state.PostReducer.loggedInUserProfilePost,
      isLoadingUserProfilePost: state.PostReducer.isLoadingLoggedInUserProfilePost,
    }
}

const mapDispatchToProps = {
  requestLoggedInUserProfile: () => requestLoggedInUserProfile(),
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
