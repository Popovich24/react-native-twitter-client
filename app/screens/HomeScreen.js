import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {getNotSilencedPost} from './../store/post/postSelector'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {requestLoadPost, requestLoadMorePost, requestAddNewPost} from '../store/post/postActions';
import PushNotification from 'react-native-push-notification';
import Timeline from '../components/timeline/timeline'
import PostButton from '../components/post/postButton'
import NewPostModalForm from '../components/post/newPostModalForm'

export class HomeScreen extends React.Component {

  constructor(props){
    super(props);

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
    this.sendLocalNotification('Tweet added!');

    const longTimeSinceLastTweetId = '1';
    const delayNotificationInSeconds = 15;
    const notificationMessage = "Hey! It's been a while since your last tweet!";

    this.cancelScheduledNotification(longTimeSinceLastTweetId);
    this.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceLastTweetId);
  }

  sendLocalNotification = (message) => {
    PushNotification.localNotification({
      message: message,
    });
  }

  cancelScheduledNotification = (id) => {
    PushNotification.cancelLocalNotifications({id: id});
  }

  scheduleNotification = (message, delayInSeconds, id) => {
    PushNotification.localNotificationSchedule({
      message: message,
      id: id,
      date: new Date(Date.now() + (delayInSeconds * 1000))
    });
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

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
