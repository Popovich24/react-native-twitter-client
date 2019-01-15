'use strict';

import {
  NOTIFICATION_ACCEPT_VERIFIED_ONLY,
  NOTIFICATION_ACCEPT_DO_NOT_FOLLOW,
  NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION,
  NOTIFICATION_ACCEPT_CONTAINS_LINK,
  NOTIFICATION_ACCEPT_TEXT_TRUNCATED
} from "./notificationActions"

export let notificationState = {};

const NotificationReducer = (state = notificationState, action) => {
  switch (action.type) {
    default:
      return state;
    }
};

export default NotificationReducer;
