export const NOTIFICATION_ACCEPT_VERIFIED_ONLY = 'NOTIFICATION_ACCEPT_VERIFIED_ONLY';
export const NOTIFICATION_ACCEPT_DO_NOT_FOLLOW = 'NOTIFICATION_ACCEPT_DO_NOT_FOLLOW';
export const NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION = 'NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION';
export const NOTIFICATION_ACCEPT_CONTAINS_LINK = 'NOTIFICATION_ACCEPT_CONTAINS_LINK';
export const NOTIFICATION_ACCEPT_TEXT_TRUNCATED = 'NOTIFICATION_ACCEPT_TEXT_TRUNCATED';

export function notificationAcceptVerifiedOnly() {
  return {type: NOTIFICATION_ACCEPT_VERIFIED_ONLY};
}

export function notificationAcceptDoNotFollow() {
  return {type: NOTIFICATION_ACCEPT_DO_NOT_FOLLOW};
}

export function notificationAcceptHaveDefaultInformation() {
  return {type: NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION};
}

export function notificationAcceptContainsLink() {
  return {type: NOTIFICATION_ACCEPT_CONTAINS_LINK};
}

export function notificationAcceptTextTruncated() {
  return {type: NOTIFICATION_ACCEPT_TEXT_TRUNCATED};
}
