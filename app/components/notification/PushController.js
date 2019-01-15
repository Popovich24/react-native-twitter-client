import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';
import firebase from 'react-native-firebase'
import { AsyncStorage } from 'react-native'
import {connect} from 'react-redux'

import * as notificationController from './notificationController';

import {
  notificationAcceptVerifiedOnly,
  notificationAcceptDoNotFollow,
  notificationAcceptHaveDefaultInformation,
  notificationAcceptContainsLink,
  notificationAcceptTextTruncated,
} from '../../store/notification/notificationActions';

class PushController extends React.Component {

  constructor(props){
    super(props);

    this.notificationController = new notificationController.NotificationController();
  }

  handleActionNotification = (action) => {
    if (action && action.action === 'Accept') {
      switch(action.id) {
        case notificationController.longTimeSinceSilencedNonVerifiedAccountsId:
          this.props.notificationAcceptVerifiedOnly();
          this.notificationController.tearDownSilencedVerifiedAccountsNotification();
          break;
        case notificationController.longTimeSinceSilencedDoNotFollowAccountsId:
          this.props.notificationAcceptDoNotFollow();
          break;
        case notificationController.longTimeSinceSilencedHaveDefaultProfileId:
          this.props.notificationAcceptHaveDefaultInformation();
          break;
        case notificationController.longTimeSinceSilencedPostThatContainLinkId:
          this.props.notificationAcceptContainsLink();
          break;
        case notificationController.longTimeSinceSilencedPostThatHaveTextTruncatedId:
          this.props.notificationAcceptTextTruncated();
          break;
        default:
          break;
      }
      action.finish();
    }
  }

  handleOnNotification = (actionNotification) => {
    const {notification} = actionNotification;
    if (notification){
      PushNotification.localNotification({
        message: notification.body,
        title: notification.title,
      });
    } else {
      this.handleActionNotification(actionNotification);
    }
  }

  async componentDidMount() {
    this.checkPermission();

    PushNotification.configure({
      onNotification: (actionNotification) => this.handleOnNotification(actionNotification),
      onMessageReceived: function(message) {
        PushNotification.localNotification({
          message: message,
        });
      },
      popInitialNotification: true,
    });
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }

  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }

  render() {
    return null;
  }
}

function mapStateToProps(state, props) {
    return {}
}

const mapDispatchToProps = {
  notificationAcceptVerifiedOnly: () => notificationAcceptVerifiedOnly(),
  notificationAcceptDoNotFollow: () => notificationAcceptDoNotFollow(),
  notificationAcceptHaveDefaultInformation: () => notificationAcceptHaveDefaultInformation(),
  notificationAcceptContainsLink: () => notificationAcceptContainsLink(),
  notificationAcceptTextTruncated: () => notificationAcceptTextTruncated(),
}

export default connect(null, mapDispatchToProps)(PushController);
