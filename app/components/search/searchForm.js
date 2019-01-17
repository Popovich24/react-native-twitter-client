'use strict';

import React from 'react'
import { Text, View, Button, TextInput, TouchableHighlight, Animated, Alert } from 'react-native'
import PropTypes from 'prop-types'
import {StackNavigator} from 'react-navigation'
import Fade from './../animation/fade'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from './searchForm.styles.js'

var AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight);

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchKeyword: '',
    }
    this.animatedValue = new Animated.Value(0);
  }

  handleOnPress = () => {
    if (this.state.searchKeyword.length > 0){
      this.props.onSubmit(this.state.searchKeyword.replace(/#/, '%23'));
      if (this.props.animated) {
        this.animatedValue = new Animated.Value(0);
        Animated.timing(this.animatedValue, {
        useNativeDriver: false,
        toValue:  1,
        duration: 300,
        }).start()
      }
    }
  }

  onReset = () => {
    this.props.onReset();
    this.setState({
      searchKeyword: '',
    })
  }

  render = () => {

    const animatedSearchButtonStyle = {
      transform: [
        {
          scale: this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.1, 1],
          }),
        },
      ],
    };

    return (
     <View style={styles.container}>
       <View style={styles.textInputView}>
         <Ionicons name="ios-search" style={styles.icon} size={styles.icon.fontSize} color={styles.icon.color}/>
         <TextInput
          underlineColorAndroid="transparent"
          style={styles.searchTextInput}
          onChangeText={(searchKeyword) => {this.setState({searchKeyword}); this.props.onSearchInputTextChange(searchKeyword);}}
          value={this.props.searchValue}
         />
         { this.props.hasSearched &&
           <Ionicons name="ios-close" style={styles.icon} onPress={this.onReset} size={styles.icon.fontSize} color={styles.icon.color}/>
         }
       </View>
       <AnimatedTouchableHighlight
        style={[styles.searchButton, animatedSearchButtonStyle]}
        onPress={this.handleOnPress}>
         <Animated.Text style={[styles.searchButtonText, animatedSearchButtonStyle]}> Search </Animated.Text>
       </AnimatedTouchableHighlight>
     </View>
    );
  }
};

export default SearchForm;
