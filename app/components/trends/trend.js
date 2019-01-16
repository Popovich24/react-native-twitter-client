import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {styles} from './trend.styles.js'

export const Trend = (props) => {

  const tw_volume = props.trend.tweet_volume === null ? null :
   <Text style={styles.volumeText}>{props.trend.tweet_volume} Tweets</Text>;

  return (
    <TouchableHighlight
       key={'t' + props.index}
       onPress={() => { props.onPress(props.trend)}}
       underlayColor='#dddddd'>
       <View style={styles.trend} key={props.index}>
          <View style={styles.trendNumberView}>
            <Text key={'#' + props.index} style={styles.trendNumber}>{props.index + 1}</Text>
          </View>
          <View style={styles.trendTextView}>
            <Text key={props.index + 'Name'} style={styles.trendText}>{props.trend.name}</Text>
            {tw_volume}
          </View>
      </View>
    </TouchableHighlight>
  );

}

export default Trend;
