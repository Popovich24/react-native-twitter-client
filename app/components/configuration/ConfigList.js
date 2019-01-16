'use strict';

import React from 'react';
import {Text, View} from 'react-native';
import ConfigItem from './ConfigItem';
import {styles} from './configList.styles.js'

const ConfigList = (props) => (

 <View>
   <View style={styles.titleView}>
     <Text style={styles.titleText}>Silence notifications from ... </Text>
   </View>
   <ConfigItem title="People who have not verified the account" onChange={props.configToggleVerifiedOnly}
               value={props.configVerifiedOnly}/>
   <ConfigItem title="People who do not follow" onChange={props.configToggleDoNotFollow}
               value={props.configDoNotFollow}/>
   <ConfigItem title="People who have default profile information" onChange={props.configToggleHaveDefaultInformation}
               value={props.configHaveDefaultInformation}/>
   <ConfigItem title="Tweets that contain a link" onChange={props.configToggleContainsLink}
               value={props.configContainsLink}/>
   <ConfigItem title="Tweets that have text truncated" onChange={props.configToggleTextTruncated}
               value={props.configTextTruncated}/>
 </View>
);

export default ConfigList;
