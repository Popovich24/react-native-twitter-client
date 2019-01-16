import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import UserProfilePicture from './../user/userProfilePicture'
import {styles} from './newPostModalForm.styles.js'

class NewPostModalForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      postText: '',
    };
  }

  handleOnSendButtonPress = () => {
    if (this.state.postText.length > 0) {
      this.props.onSendButtonPress(this.state.postText);
      this.setState({postText: ''});
    } else {
      Alert.alert('Error',"Tweet can't be empty");
    }
  }

  handleOnCloseButtonPress = () => {

    const handleOnOKButtonPress = () => {
      this.props.onCloseButtonPress();
      this.setState({postText: ''});
    }

    if (this.state.postText.length > 0) {
      Alert.alert(
        'Warning',
        'Delete draft?',
        [
          {text: 'Cancel', onPress: () => {}},
          {text: 'OK', onPress: handleOnOKButtonPress},
        ]
      )
    } else {
      this.props.onCloseButtonPress();
    }
  }

  render = () => {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
          onRequestClose={() => {}}>
          <View style={styles.modalContainer}>
            <View style={styles.actionsContainer}>
              <TouchableOpacity onPress={this.handleOnSendButtonPress} style={styles.actionButton}>
                <Ionicons name="ios-send" size={32} color="#1183ff"/>
                <Text style={styles.actionText}> Tweet </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleOnCloseButtonPress} style={styles.actionButton}>
                <Ionicons name="ios-close" size={44} color="#1183ff"/>
                <Text style={styles.actionText}> Close </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                autofocus={true}
                placeholder={"What's happening?"}
                value={this.state.postText}
                onChangeText={(newPost) => {this.setState({postText: newPost})}}
                style={styles.postTextInput}
                multiline={true}
                numberOfLines={16}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

}

export default NewPostModalForm;
