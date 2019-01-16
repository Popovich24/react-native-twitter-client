'use strict';

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Trend} from './trend'
import {styles} from './trendList'

class TrendList extends React.Component {

  render = () => {

    let trends = [];

    if (this.props.trends.length > 0) {
      trends = this.props.trends.map((trend, index) => {
        return (
         <Trend onPress={this.props.onItemPress} trend={trend} key={index} index={index} />
        );
      });
    }

    return (
      <ScrollView>
        {trends}
      </ScrollView>
    )
  };
}

export default TrendList;
