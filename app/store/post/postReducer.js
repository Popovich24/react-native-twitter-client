import {
  REQUEST_POST_LOAD,
  SUCCESS_POST_LOAD,
  FAILURE_POST_LOAD,
  REQUEST_POST_LOAD_MORE,
  SUCCESS_POST_LOAD_MORE,
  FAILURE_POST_LOAD_MORE,
  REQUEST_POST_SEARCH,
  SUCCESS_POST_SEARCH,
  FAILURE_POST_SEARCH,
  REQUEST_POST_SEARCH_MORE,
  SUCCESS_POST_SEARCH_MORE,
  FAILURE_POST_SEARCH_MORE,
  REQUEST_POST_SHOW,
  SUCCESS_POST_SHOW,
  FAILURE_POST_SHOW,
  RESET_POST_SEARCH,
  REQUEST_USER_PROFILE_LOAD_POST,
  SUCCESS_USER_PROFILE_LOAD_POST,
  FAILURE_USER_PROFILE_LOAD_POST,
  REQUEST_LOGGED_IN_USER_PROFILE_LOAD_POST,
  SUCCESS_LOGGED_IN_USER_PROFILE_LOAD_POST,
  FAILURE_LOGGED_IN_USER_PROFILE_LOAD_POST,
  REQUEST_ADD_NEW_POST,
  SUCCESS_ADD_NEW_POST,
  FAILURE_ADD_NEW_POST,
} from './postActions'

export let postState = {
  loadedPost: [],
  isLoadingPost: false,
  isLoadingMorePost: false,

  hasSearchedForPost: false,
  loadingSearchPost: false,
  loadingMoreSearchPost: false,
  searchKeyword: '',
  searchPost: [],

  isLoadingShowPost: true,
  showPostId: -1,
  showPost: {},

  userProfilePost: [],
  isLoadingUserProfilePost: false,

  loggedInUserProfilePost: [],
  isLoadingLoggedInUserProfilePost: false,

  newPost: {},
  isSendingNewPost: false,

  failureError: '',
  hasFailed: false,

};

const PostReducer = (state = postState, action) => {
  switch(action.type) {

    case REQUEST_POST_LOAD:
      state = Object.assign({}, state, { isLoadingPost: true, hasFailed: false });
      return state;
    case SUCCESS_POST_LOAD:
      state = Object.assign({}, state, { loadedPost: action.data, isLoadingPost: false });
      return state;
    case FAILURE_POST_LOAD:
      state = Object.assign({}, state, {isLoadingPost: false, hasFailed: true, errorDetail: action.errorDetail, loadedPost: []});
      return state;

    case REQUEST_POST_LOAD_MORE:
      state = Object.assign({}, state, { isLoadingMorePost: true, hasFailed: false });
      return state;
    case SUCCESS_POST_LOAD_MORE:
      state = Object.assign({}, state, { loadedPost: state.loadedPost.concat(action.data), isLoadingMorePost: false });
      return state;
    case FAILURE_POST_LOAD_MORE:
      state = Object.assign({}, state, {isLoadingMorePost: false, hasFailed: true, errorDetail: action.errorDetail});
      return state;

    case REQUEST_POST_SEARCH:
      state = Object.assign({}, state, { hasSearchedForPost: true, loadingSearchPost: true, searchKeyword: action.searchKeyword, hasFailed: false  });
      return state;
    case SUCCESS_POST_SEARCH:
      state = Object.assign({}, state, { searchPost: action.data, loadingSearchPost: false });
      return state;
    case FAILURE_POST_SEARCH:
      state = Object.assign({}, state, {loadingSearchPost: false, hasFailed: true, errorDetail: action.errorDetail});
      return state;

    case REQUEST_POST_SEARCH_MORE:
      state = Object.assign({}, state, {loadingMoreSearchPost: true, hasFailed: false  });
      return state;
    case SUCCESS_POST_SEARCH_MORE:
      state = Object.assign({}, state, {searchPost: state.searchPost.concat(action.data), loadingMoreSearchPost: false });
      return state;
    case FAILURE_POST_SEARCH_MORE:
      state = Object.assign({}, state, {loadingMoreSearchPost: false, hasFailed: true, errorDetail: action.errorDetail});
      return state;

    case RESET_POST_SEARCH:
      state = Object.assign({}, state, {hasSearchedForPost: false, loadingSearchPost: false, loadingMoreSearchPost: false, searchKeyword: '', hasFailed: false  });
      return state;

    case REQUEST_POST_SHOW:
      state = Object.assign({}, state, {isLoadingShowPost: true, showPostId: action.id, hasFailed: false });
      return state;
    case SUCCESS_POST_SHOW:
      state = Object.assign({}, state, {isLoadingShowPost: false, showPost: action.data});
      return state;
    case FAILURE_POST_SHOW:
      state = Object.assign({}, state, {isLoadingShowPost: false, showPostId: -1, hasFailed: true, errorDetail: action.errorDetail});
      return state;

    case REQUEST_USER_PROFILE_LOAD_POST:
      state = Object.assign({}, state, {isLoadingUserProfilePost: true, hasFailed: false });
      return state;
    case SUCCESS_USER_PROFILE_LOAD_POST:
      state = Object.assign({}, state, {isLoadingUserProfilePost: false, userProfilePost: action.data});
      return state;
    case FAILURE_USER_PROFILE_LOAD_POST:
      state = Object.assign({}, state, {isLoadingUserProfilePost: false, hasFailed: true, errorDetail: action.errorDetail});
      return state;

    case REQUEST_LOGGED_IN_USER_PROFILE_LOAD_POST:
      state = Object.assign({}, state, {isLoadingLoggedInUserProfilePost: true, hasFailed: false });
      return state;
    case SUCCESS_LOGGED_IN_USER_PROFILE_LOAD_POST:
      state = Object.assign({}, state, {isLoadingLoggedInUserProfilePost: false, loggedInUserProfilePost: action.data});
      return state;
    case FAILURE_LOGGED_IN_USER_PROFILE_LOAD_POST:
      state = Object.assign({}, state, {isLoadingLoggedInUserProfilePost: false, hasFailed: true, errorDetail: action.errorDetail});
      return state;

    case REQUEST_ADD_NEW_POST:
      state = Object.assign({}, state, {newPost: action.data, isSendingNewPost: true,});
      return state;
    case SUCCESS_ADD_NEW_POST:
      state = Object.assign({}, state, {isSendingNewPost: false, loggedInUserProfilePost: [action.data].concat(state.loggedInUserProfilePost)});
      return state;
    case FAILURE_ADD_NEW_POST:
      state = Object.assign({}, state, {isSendingNewPost: false, hasFailed: true, errorDetail: action.errorDetail});
      return state;
    default:
      return state;
  }
}

export default PostReducer
