import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },

  socialInteractionContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },

  socialInteractionElement: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'steelblue',
    width: 65,
    height: 65,
    justifyContent: 'center'
  },

  socialInteractionText: {
    color: 'grey',
    margin: 5,
    fontSize: 15,
  },

  profileView: {
    height: 80,
    flexDirection: 'row',
  },

  contentView: {},

  usernameTitle: {
    paddingLeft: 10
  },

  profileUsername: {
    fontSize: 17,
    fontWeight: "600",
  },

  profileScreenName: {
    fontSize: 17,
    color: 'grey',
  },

  profilePic: {
    resizeMode: 'contain',
    height: 75,
    width: 75,
    borderRadius: 25,
  },

  post: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",

    padding: 10,
  },

  postContent: {
    fontSize: 19,
    paddingLeft: 5,
    fontWeight: "400",
    lineHeight: 30
  },

  postImage: {
    borderRadius: 10,
    resizeMode: 'contain',
    height: 250
  },
  textView: {

    paddingLeft: 1,

  },
  mediaView: {
    marginBottom: 10,

  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  interactionsCount: {
    flexDirection: 'row',
  },
  dateView: {
    paddingTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  interactionText: {
    fontSize: 15,
    color: 'grey',
  },
  retweetCountView: {
    padding: 10,
  },
  favoriteCountView: {
    padding: 10,
    paddingLeft: 20
  }
});
