import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {getNotSilencedPost} from './../store/post/postSelector'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {requestLoadPost, requestLoadMorePost, requestAddNewPost} from '../store/post/postActions';
import {NotificationController} from '../components/notification/notificationController'
import Timeline from '../components/timeline/timeline'
import PostButton from '../components/post/postButton'
import NewPostModalForm from '../components/post/newPostModalForm'
import {styles} from './HomeScreen.styles.js'

export class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.notificationController = new NotificationController();
    this.state = {
      showingNewPostForm: false,
    }
  }

  handleOnPostButtonPress = () => {
    this.setState({
      showingNewPostForm: !this.state.showingNewPostForm,
    });
  }

  handleOnSendButtonPress = (newPost) => {
    this.props.requestAddNewPost(newPost);
    this.handleOnPostButtonPress();
    this.notificationController.sendLocalNotification('Tweet added!');

    const longTimeSinceLastTweetId = '1';
    const delayNotificationInSeconds = 15;
    const notificationMessage = "Hey! It's been a while since your last tweet!";

    this.notificationController.cancelScheduledNotification(longTimeSinceLastTweetId);
    this.notificationController.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceLastTweetId);
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Timeline
          data={this.props.loadedPost}
          navigation={this.props.navigation}
          loading={this.props.loading}
          loadingMorePost={this.props.loadingMorePost}
          onRefresh={this.props.requestLoadPost}
          refreshing={false}
          onComponentMount={this.props.requestLoadPost}
          onEndReached={this.props.requestLoadMorePost}
        />
        <PostButton onPress={this.handleOnPostButtonPress} />
        <NewPostModalForm
          onTextInputValueChange={this.handleOnTextInputValueChange}
          modalVisible={this.state.showingNewPostForm}
          onSendButtonPress={this.handleOnSendButtonPress}
          onCloseButtonPress={this.handleOnPostButtonPress}
        />
      </View>
    );
  }
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  header: null
};

function mapStateToProps(state, props) {
    return {
        loading: state.PostReducer.isLoadingPost,
        loadingMorePost: state.PostReducer.isLoadingMorePost,
        loadedPost: getNotSilencedPost(state),
    }
}

const mapDispatchToProps = {
  requestLoadPost: () => requestLoadPost(),
  requestLoadMorePost: () => requestLoadMorePost(),
  requestAddNewPost: (newPost) => requestAddNewPost(newPost),
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
