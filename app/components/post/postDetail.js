'use strict';

import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Post from './post'
import {styles} from './postDetail.styles.js'

const postDetails = (props) => {

  const {item} = props;
  let media;

  if (item.entities.media) {
    media = item.entities.media.map((image, i) => {
      return (
       <View style={styles.mediaView} key={i}>
         <Image
          source={{uri: image.media_url_https}}
          style={styles.postImage}
          key={image.id}/>
       </View>
      );
    });
  }

  const date = formatDate(item.created_at);

  return (
    <ScrollView>
      <Post item={props.item}/>
      <View style={styles.dateView}>
        <Text> {date} </Text>
      </View>
      <View style={styles.separator} />

    </ScrollView>
  );
};

const formatDate = (date) => {
  return date.slice(11, 16).concat(' - ' + date.slice(8, 10))
   .concat(' ' + date.slice(4, 7) + '.').concat(' ' + date.slice(28, 30));
};

export default postDetails
