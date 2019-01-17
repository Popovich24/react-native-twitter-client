import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import {styles} from './postMedia.styles.js'

export const PostMedia = (props) => {

  const renderMedia = (media) => {
    let output;
    if (media) {
      output = media.map((image) => {
        return(
          <Image
            source={{uri: image.media_url_https}}
            style={styles.postImage}
            fadeDuration={0}
            key={image.id}/>
        );
      });
    }

    return output;
  }

  return (
    <View>
      { renderMedia(props.post.entities.media) }
    </View>
  );
}
