import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';
import firebase from 'react-native-firebase'
import { AsyncStorage, Alert } from 'react-native'

export default class PushController extends Component {

  async componentDidMount() {
    this.checkPermission();

    PushNotification.configure({
      onNotification: function(openNotification) {
        const {notification} = openNotification;
        if (notification){
          PushNotification.localNotification({
            message: notification.body,
            title: notification.title,
          });
        }
      },
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
