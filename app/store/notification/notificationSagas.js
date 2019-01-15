import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {
  NOTIFICATION_ACCEPT_VERIFIED_ONLY,
  NOTIFICATION_ACCEPT_DO_NOT_FOLLOW,
  NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION,
  NOTIFICATION_ACCEPT_CONTAINS_LINK,
  NOTIFICATION_ACCEPT_TEXT_TRUNCATED,
} from './notificationActions.js'

import {
  configToggleVerifiedOnly,
  configToggleDoNotFollow,
  configToggleHaveDefaultInformation,
  configToggleContainsLink,
  configToggleTextTruncated,
} from './../configuration/configurationActions.js'

export const serverIP = '10.160.11.56:8080';

export function* notificationAcceptVerifiedOnly(){
  yield put(configToggleVerifiedOnly());
}

function* watchNotificationAcceptVerifiedOnly() {
  yield takeLatest(NOTIFICATION_ACCEPT_VERIFIED_ONLY, notificationAcceptVerifiedOnly);
}

export function* notificationAcceptDoNotFollow(){
  yield put(configToggleDoNotFollow());
}

function* watchNotificationAcceptDoNotFollow() {
  yield takeLatest(NOTIFICATION_ACCEPT_DO_NOT_FOLLOW, notificationAcceptDoNotFollow);
}

export function* notificationAcceptHaveDefaultInformation(){
  yield put(configToggleHaveDefaultInformation());
}

function* watchNotificationAcceptHaveDefaultInformation() {
  yield takeLatest(NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION, notificationAcceptHaveDefaultInformation);
}

export function* notificationAcceptContainsLink(){
  yield put(configToggleContainsLink());
}

function* watchNotificationAcceptContainsLink() {
  yield takeLatest(NOTIFICATION_ACCEPT_CONTAINS_LINK, notificationAcceptContainsLink);
}

export function* notificationAcceptTextTruncated(){
  yield put(configToggleTextTruncated());
}

function* watchNotificationAcceptTextTruncated() {
  yield takeLatest(NOTIFICATION_ACCEPT_TEXT_TRUNCATED, notificationAcceptTextTruncated);
}


export default function* notificationSagas(){
  yield all([
    watchNotificationAcceptVerifiedOnly(),
    watchNotificationAcceptDoNotFollow(),
    watchNotificationAcceptHaveDefaultInformation(),
    watchNotificationAcceptContainsLink(),
    watchNotificationAcceptTextTruncated(),
  ])
}
