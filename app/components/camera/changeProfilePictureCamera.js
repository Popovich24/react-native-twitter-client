'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {styles} from './changeProfilePictureCamera.styles.js'

import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Camera extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cameraType: RNCamera.Constants.Type.front,
    }
  }

  reverseCamera = () => {
    console.log('reversing camera');
    if (this.state.cameraType.front) {
      this.setState({
        cameraType: RNCamera.Constants.Type.back,
      })
    } else {
      this.setState({
        cameraType: RNCamera.Constants.Type.front,
      })
    }
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { fixOrientation: true, quality: 0.2, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.props.onPictureTaken(data);
    }
  };

  render = () => {
    return (
      <View style={styles.cameraContainer}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={this.state.cameraType}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={styles.cameraActionsContainer}>
          <Ionicons name="ios-reverse-camera" onPress={this.reverseCamera} size={styles.actionIcon.fontSize} color={styles.actionIcon.color}/>
          <Ionicons name="ios-camera" onPress={this.takePicture.bind(this)} size={styles.actionIcon.fontSize} color={styles.actionIcon.color}/>
        </View>
      </View>
    );
  }
}

export default Camera
