export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE'
export const SUCCESS_USER_PROFILE = 'SUCCESS_USER_PROFILE'
export const FAILURE_USER_PROFILE = 'FAILURE_USER_PROFILE'

export const REQUEST_LOGGED_IN_USER_PROFILE = 'REQUEST_LOGGED_IN_USER_PROFILE'
export const SUCCESS_LOGGED_IN_USER_PROFILE = 'SUCCESS_LOGGED_IN_USER_PROFILE'
export const FAILURE_LOGGED_IN_USER_PROFILE = 'FAILURE_LOGGED_IN_USER_PROFILE'

export const NEW_PICTURE_TAKEN_PROFILE_PICTURE_CHANGE = 'NEW_PICTURE_TAKEN_PROFILE_PICTURE_CHANGE'
export const REQUEST_PROFILE_PICTURE_CHANGE = 'REQUEST_PROFILE_PICTURE_CHANGE'
export const SUCCESS_PROFILE_PICTURE_CHANGE = 'SUCCESS_PROFILE_PICTURE_CHANGE'
export const FAILURE_PROFILE_PICTURE_CHANGE = 'FAILURE_PROFILE_PICTURE_CHANGE'

export const requestUserProfile = (userId) => {
  return {type: REQUEST_USER_PROFILE, userId: userId}
}

export const successUserProfile = (data) => {
  return {type: SUCCESS_USER_PROFILE, data: data}
}

export const failureUserProfile = (er) => {
  return {type: FAILURE_USER_PROFILE, errorDetail: er}
}

export const requestLoggedInUserProfile = () => {
  return {type: REQUEST_LOGGED_IN_USER_PROFILE}
}

export const successLoggedInUserProfile = (data) => {
  return {type: SUCCESS_LOGGED_IN_USER_PROFILE, data: data}
}

export const failureLoggedInUserProfile = (er) => {
  return {type: FAILURE_LOGGED_IN_USER_PROFILE, errorDetail: er}
}

export const newPictureTakenProfilePictureChange = (data) => {
  return {type: NEW_PICTURE_TAKEN_PROFILE_PICTURE_CHANGE, data: data}
}

export const requestProfilePictureChange = () => {
  return {type: REQUEST_PROFILE_PICTURE_CHANGE}
}

export const successProfilePictureChange = (data) => {
  return {type: SUCCESS_PROFILE_PICTURE_CHANGE, data: data}
}

export const failureProfilePictureChange = (er) => {
  return {type: FAILURE_PROFILE_PICTURE_CHANGE, errorDetail: er}
}
