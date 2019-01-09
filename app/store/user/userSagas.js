import { call, all, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {getUserProfileId, getProfilePictureTakenURI} from './userSelector'

import {
  successUserProfile,
  failureUserProfile,
  REQUEST_USER_PROFILE,
  successLoggedInUserProfile,
  failureLoggedInUserProfile,
  REQUEST_LOGGED_IN_USER_PROFILE,
  PICTURE_ACCEPTED_PROFILE_PICTURE_CHANGE,
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
  const newProfilePictureURI = yield select(getProfilePictureTakenURI);
  const fileImage = {
    uri: newProfilePictureURI,
    name: 'image.jpg',
    type: 'image/jpeg',
  };

  const formData = new FormData();
  formData.append('image', fileImage)

  const request = {
    body: formData,
    method: 'POST',
    headers: new Headers({
              'Content-Type': 'multipart/form-data'
    }),
  }
  yield call(fetch, url , request);
}

function* watchChangeLoggedInUserProfilePicture(){
  yield takeLatest(PICTURE_ACCEPTED_PROFILE_PICTURE_CHANGE, changeLoggedInUserProfilePicture);
}

export default function* userSagas(){
  yield all([
    watchUserProfile(),
    watchLoggedInUserProfile(),
    watchChangeLoggedInUserProfilePicture(),
  ])
}
