import {
  REQUEST_USER_PROFILE,
  SUCCESS_USER_PROFILE,
  FAILURE_USER_PROFILE,
  REQUEST_LOGGED_IN_USER_PROFILE,
  SUCCESS_LOGGED_IN_USER_PROFILE,
  FAILURE_LOGGED_IN_USER_PROFILE,
  NEW_PICTURE_TAKEN_PROFILE_PICTURE_CHANGE,
  PICTURE_ACCEPTED_PROFILE_PICTURE_CHANGE,
  FAILURE_PROFILE_PICTURE_CHANGE,
} from './userActions'

export let userState = {
  user: {},
  userId: -1,
  isLoadingUserProfile: false,

  loggedInUser: {},
  isLoadingLoggedInUserProfile: false,

  failureError: '',
  hasFailed: false,

  isProfilePictureTaken: false,
  profilePictureTakenURI: '',

}

const UserReducer =  (state = userState, action) => {
  switch(action.type) {
    case REQUEST_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingUserProfile: true, userId: action.userId, hasFailed: false, failureError: ''});
      return state;
    case SUCCESS_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingUserProfile: false, user: action.data});
      return state;
    case FAILURE_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingUserProfile: false, hasFailed: true, failureError: action.errorDetail});
      return state;
    case REQUEST_LOGGED_IN_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingLoggedInUserProfile: true, hasFailed: false, failureError: ''});
      return state;
    case SUCCESS_LOGGED_IN_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingLoggedInUserProfile: false, loggedInUser: action.data});
      return state;
    case FAILURE_LOGGED_IN_USER_PROFILE:
      state = Object.assign({}, state, {hasFailed: true, failureError: action.errorDetail, isLoadingLoggedInUserProfile: false});
      return state;
    case NEW_PICTURE_TAKEN_PROFILE_PICTURE_CHANGE:
      state = Object.assign({}, state, {isProfilePictureTaken: true, profilePictureTakenURI: action.data});
      return state;
    case PICTURE_ACCEPTED_PROFILE_PICTURE_CHANGE:
      state = Object.assign({}, state, {});
      return state;
    case FAILURE_PROFILE_PICTURE_CHANGE:
      state = Object.assign({}, state, {isProfilePictureTaken: false, profilePictureTakenURI: ''});
      return state;
    default:
      return state;
  }
}

export default UserReducer;
