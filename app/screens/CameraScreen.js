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


import {newPictureTakenProfilePictureChange, pictureAcceptedProfilePictureChange, failureProfilePictureChange} from '../store/user/userActions';
import {connect} from 'react-redux';

export class CameraScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusedScreen: true,
      pictureTaken: false,
    }
  }

  handleOnPictureTaken = (data) => {
    console.log(data.uri);
    this.props.newPictureTakenProfilePictureChange(data.uri);
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
    this.props.pictureAcceptedProfilePictureChange();
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
          pictureURI={this.props.profilePictureTakenURI}
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
      profilePictureTakenURI: state.UserReducer.profilePictureTakenURI,
  }
}

const mapDispatchToProps = {
  newPictureTakenProfilePictureChange: (data) => newPictureTakenProfilePictureChange(data),
  pictureAcceptedProfilePictureChange: () => pictureAcceptedProfilePictureChange(),
  failureProfilePictureChange: () => failureProfilePictureChange(),
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});
