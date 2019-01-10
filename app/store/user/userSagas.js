import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {getUserProfileId, getprofilePictureTaken} from './userSelector'

import {
  successUserProfile,
  failureUserProfile,
  REQUEST_USER_PROFILE,
  successLoggedInUserProfile,
  failureLoggedInUserProfile,
  REQUEST_LOGGED_IN_USER_PROFILE,
  REQUEST_PROFILE_PICTURE_CHANGE,
  successProfilePictureChange,
} from "./userActions.js"

export const serverIP = '10.160.11.56:8080';

export function* loadUserProfile(){
  const userId = yield select(getUserProfileId);
  const url = `http://${serverIP}/user?id=${userId}`;
  try {
    const response = yield call(fetch, url);
    const data = yield call([response, 'json']);
    yield put(successUserProfile(data));
  } catch(er) {
    yield put(failureUserProfile(er));
    console.log(er);
  }
}

function* watchUserProfile() {
  yield takeLatest(REQUEST_USER_PROFILE, loadUserProfile);
}

function* loadLoggedInUserProfile(){
  const url = `http://${serverIP}/loggedInUserProfile`;
  try {
    const response = yield call(fetch, url);
    const data = yield call([response, 'json']);
    yield put(successLoggedInUserProfile(data));
  } catch(er) {
    yield put(failureLoggedInUserProfile(er));
    console.log(er);
  }
}

function* watchLoggedInUserProfile(){
  yield takeLatest(REQUEST_LOGGED_IN_USER_PROFILE, loadLoggedInUserProfile);
}

function* changeLoggedInUserProfilePicture(){
  const url = `http://${serverIP}/update_profile_picture`;
  const newProfilePicture = yield select(getprofilePictureTaken);

  const request = {
    body: JSON.stringify({image: newProfilePicture.base64}),
    method: 'POST',
    headers: new Headers({
              'Content-Type': 'application/json'
    })
  }

  try{
    const response = yield call(fetch, url, request);
    const data = yield call([response, 'json']);
    yield put(successProfilePictureChange(data));
  } catch(er) {
    yield put(failureProfilePictureChange(er));
  }


}

function* watchChangeLoggedInUserProfilePicture(){
  yield takeLatest(REQUEST_PROFILE_PICTURE_CHANGE, changeLoggedInUserProfilePicture);
}

export default function* userSagas(){
  yield all([
    watchUserProfile(),
    watchLoggedInUserProfile(),
    watchChangeLoggedInUserProfilePicture(),
  ])
}
