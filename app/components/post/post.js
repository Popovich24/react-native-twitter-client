'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import SocialInteraction from './socialInteraction'
import {PostContent} from './postComponent/postContent'
import {PostMedia} from './postComponent/postMedia'
import {PostProfilePicture} from './postComponent/postProfilePicture'
import {PostUserInformation} from './postComponent/postUserInformation'
import {styles} from './post.styles.js'

class Post extends React.PureComponent{

  constructor(props){
    super(props);
  }

  handleOnProfilePicPress = () => {
    this.props.onProfilePicPress(this.props.item.user);
  }

  render = () => {
    return (
      <View style={styles.post}>
        <View style={styles.row}>
          <PostProfilePicture user={this.props.item.user} onProfilePicPress={this.handleOnProfilePicPress}/>
          <View style={styles.contentView}>
            <PostUserInformation user={this.props.item.user} />
            <PostContent post={this.props.item} />
            <PostMedia post={this.props.item} />
            <SocialInteraction
              favoriteCount={this.props.item.favorite_count}
              retweetCount={this.props.item.retweet_count}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Post;
