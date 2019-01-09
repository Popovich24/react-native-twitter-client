export const getUserProfileId = state => {
  return state.UserReducer.userId;
}

export const getLoggedInUserProfileId = state => {
  //return state.UserReducer.loggedInUser.id_str;
  return 834702151
}

export const getProfilePictureTakenURI = state => {
  return state.UserReducer.profilePictureTakenURI;
}
