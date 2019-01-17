'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid } from 'react-native';

import ChangeProfilePictureCamera from './../components/camera/changeProfilePictureCamera'
import ProfilePicturePreviewer from './../components/camera/profilePicturePreviewer'


import {newPictureTakenProfilePictureChange, requestProfilePictureChange, failureProfilePictureChange} from '../store/user/userActions';
import {connect} from 'react-redux'
import {styles} from './CameraScreen.styles.js'

export class CameraScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusedScreen: true,
      pictureTaken: false,
    }
  }

  handleOnPictureTaken = (data) => {
    this.props.newPictureTakenProfilePictureChange(data);
  }

  componentDidMount = () => {

    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  }

  handleOnAcceptProfilePictureChange = () => {
    this.props.requestProfilePictureChange();
    this.props.navigation.goBack();
  }

  handleOnRejectProfilePictureChange = () => {
    this.props.failureProfilePictureChange();
  }

  discardPicture = () => {
    this.setState({pictureTaken})
  }

  renderScreen = () => {

    return (
      <View style={styles.container}>
      {!this.props.hasPictureBeenTaken &&
        <ChangeProfilePictureCamera
          onPictureTaken={this.handleOnPictureTaken}
        />
      }
      {this.props.hasPictureBeenTaken &&
        <ProfilePicturePreviewer
          picture={this.props.profilePictureTaken}
          onRejectProfilePictureChange={this.handleOnRejectProfilePictureChange}
          onAcceptProfilePictureChange={this.handleOnAcceptProfilePictureChange}
        />
      }
      </View>
    );

  }

  render = () => {
    const { hasCameraPermission, focusedScreen } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (focusedScreen){
      return (this.renderScreen());
    } else {
      return <View />;
    }
  }
}


function mapStateToProps(state, props) {
  return {
      hasPictureBeenTaken: state.UserReducer.isProfilePictureTaken,
      profilePictureTaken: state.UserReducer.profilePictureTaken,
  }
}

const mapDispatchToProps = {
  newPictureTakenProfilePictureChange: (data) => newPictureTakenProfilePictureChange(data),
  requestProfilePictureChange: () => requestProfilePictureChange(),
  failureProfilePictureChange: () => failureProfilePictureChange(),
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);
