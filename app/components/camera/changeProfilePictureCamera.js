'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

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
      const options = { fixOrientation: true, quality: 1, base64: true };
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
          <Ionicons name="ios-reverse-camera" onPress={this.reverseCamera} size={80} color="#1183ff"/>
          <Ionicons name="ios-camera" onPress={this.takePicture.bind(this)} size={80} color="#1183ff"/>
        </View>
      </View>
    );
  }
}

export default Camera

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  cameraActionsContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  preview: {
    flex: 0.8,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  captureButton: {
    flex: 0,
    backgroundColor: '#1FBFFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  captureText: {
    color: 'white',
    fontSize: 16,
  }
});
