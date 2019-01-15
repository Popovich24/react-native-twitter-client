import PushNotification from 'react-native-push-notification';
import { DeviceEventEmitter } from 'react-native';

export const longTimeSinceSilencedNonVerifiedAccountsId = '2';
export const longTimeSinceSilencedDoNotFollowAccountsId = '3';
export const longTimeSinceSilencedHaveDefaultProfileId = '4';
export const longTimeSinceSilencedPostThatContainLinkId = '5';
export const longTimeSinceSilencedPostThatHaveTextTruncatedId = '6';

export class NotificationController {

  setUpSilencedVerifiedAccountsNotification = () => {
    const delayNotificationInSeconds = 5;
    const notificationMessage = "Hey! It's been a while since you checked the non verified accounts!";

    this.cancelScheduledNotification(longTimeSinceSilencedNonVerifiedAccountsId);
    this.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceSilencedNonVerifiedAccountsId);
  }

  tearDownSilencedVerifiedAccountsNotification = () => {
    this.cancelScheduledNotification(longTimeSinceSilencedNonVerifiedAccountsId);
  }

  setUpSilencedDoNotFollowNotification = () => {
    const delayNotificationInSeconds = 5;
    const notificationMessage = "Hey! It's been a while since you checked the non followers accounts!";

    this.cancelScheduledNotification(longTimeSinceSilencedDoNotFollowAccountsId);
    this.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceSilencedDoNotFollowAccountsId);
  }

  tearDownSilencedDoNotFollowNotification = () => {
    this.cancelScheduledNotification(longTimeSinceSilencedDoNotFollowAccountsId);
  }

  setUpSilencedHaveDefaultProfileNotification = () => {
    const delayNotificationInSeconds = 5;
    const notificationMessage = "Hey! It's been a while since you checked the accounts with default information!";

    this.cancelScheduledNotification(longTimeSinceSilencedHaveDefaultProfileId);
    this.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceSilencedHaveDefaultProfileId);
  }

  tearDownSilencedHaveDefaultProfileNotification = () => {
    this.cancelScheduledNotification(longTimeSinceSilencedHaveDefaultProfileId);
  }

  setUpSilencedPostThatContainLinkNotification = () => {
    const delayNotificationInSeconds = 5;
    const notificationMessage = "Hey! It's been a while since you checked post that contain links!";

    this.cancelScheduledNotification(longTimeSinceSilencedPostThatContainLinkId);
    this.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceSilencedPostThatContainLinkId);
  }

  tearDownSilencedPostThatContainLinkNotification = () => {
    this.cancelScheduledNotification(longTimeSinceSilencedPostThatContainLinkId);
  }

  setUpSilencedPostThatHaveTextTruncated = () => {
    const delayNotificationInSeconds = 5;
    const notificationMessage = "Hey! It's been a while since you checked post that have text truncated!";

    this.cancelScheduledNotification(longTimeSinceSilencedPostThatHaveTextTruncatedId);
    this.scheduleNotification(notificationMessage, delayNotificationInSeconds, longTimeSinceSilencedPostThatHaveTextTruncatedId);
  }

  tearDownSilencedPostThatHaveTextTruncated = () => {
    this.cancelScheduledNotification(longTimeSinceSilencedPostThatHaveTextTruncatedId);
  }

  sendLocalNotification = (message) => {
    PushNotification.localNotification({
      message: message,
    })
  };

  cancelScheduledNotification = (id) => {
    PushNotification.cancelLocalNotifications({id: id});
  }

  scheduleNotification = (message, delayInSeconds, id) => {
    PushNotification.localNotificationSchedule({
      message: message,
      id: id,
      actions: '["Accept", "Reject"]',
      date: new Date(Date.now() + (delayInSeconds * 1000))
    });
  }

  setConfigToggleVerifiedOnly = (action) => {
    this.configToggleVerifiedOnly = action;
  }

  setConfigToggleDoNotFollow = (action) => {
    this.configToggleDoNotFollow = action;
  }

  setConfigToggleHaveDefaultInformation = (action) => {
    this.configToggleHaveDefaultInformation = action;
  }

  setConfigToggleContainsLink = (action) => {
    this.configToggleContainsLink = action;
  }

  setConfigToggleTextTruncated = (action) => {
    this.configToggleTextTruncated = action;
  }
}
