import React, {Component} from 'react'
import {Modal, Text, TouchableHighlight, View, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import UserProfilePicture from './../user/userProfilePicture'

class NewPostModalForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      postText: '',
    };
  }

  handleOnSendButtonPress = () => {
    this.props.onSendButtonPress(this.state.postText);
    this.setState({postText: ''});
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
              <TouchableOpacity onPress={this.props.onCloseButtonPress} style={styles.actionButton}>
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

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#1183ff'
  },
  modalContainer: {
    flex: 0.7,
  },
  postTextInput: {
    textAlignVertical: 'top', // ANDROID-ONLY
    height: Dimensions.get('window').height/2,
    padding: 10,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textInputContainer: {
    flex: 1,
    padding: 5
  }
});
