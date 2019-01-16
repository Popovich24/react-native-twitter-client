'use strict';

import React from 'react';
import {Text, View, CheckBox} from 'react-native'
import {styles} from './configItem.styles.js'

class ConfigItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnValueChange = this.handleOnValueChange.bind(this);
  }

  handleOnValueChange() {
    this.props.onChange();
  }

  render() {
    return (
     <View style={styles.configItem}>
       <View style={styles.configTextView}>
         <Text style={styles.configText}>{this.props.title}</Text>
       </View>
       <View style={styles.checkboxView}>
         <CheckBox
          style={styles.configCheckBox}
          onValueChange={this.handleOnValueChange}
          value={this.props.value}
         />
       </View>
     </View>
    );
  }
}

export default ConfigItem;
