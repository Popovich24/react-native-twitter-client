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
  configTurnOffVerifiedOnly,
  configTurnOffDoNotFollow,
  configTurnOffHaveDefaultInformation,
  configTurnOffContainsLink,
  configTurnOffTextTruncated,
} from './../configuration/configurationActions.js'

export const serverIP = '10.160.11.56:8080';

export function* notificationAcceptVerifiedOnly(){
  yield put(configTurnOffVerifiedOnly());
}

function* watchNotificationAcceptVerifiedOnly() {
  yield takeLatest(NOTIFICATION_ACCEPT_VERIFIED_ONLY, notificationAcceptVerifiedOnly);
}

export function* notificationAcceptDoNotFollow(){
  yield put(configTurnOffDoNotFollow());
}

function* watchNotificationAcceptDoNotFollow() {
  yield takeLatest(NOTIFICATION_ACCEPT_DO_NOT_FOLLOW, notificationAcceptDoNotFollow);
}

export function* notificationAcceptHaveDefaultInformation(){
  yield put(configTurnOffHaveDefaultInformation());
}

function* watchNotificationAcceptHaveDefaultInformation() {
  yield takeLatest(NOTIFICATION_ACCEPT_HAVE_DEFAULT_INFORMATION, notificationAcceptHaveDefaultInformation);
}

export function* notificationAcceptContainsLink(){
  yield put(configTurnOffContainsLink());
}

function* watchNotificationAcceptContainsLink() {
  yield takeLatest(NOTIFICATION_ACCEPT_CONTAINS_LINK, notificationAcceptContainsLink);
}

export function* notificationAcceptTextTruncated(){
  yield put(configTurnOffTextTruncated());
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
