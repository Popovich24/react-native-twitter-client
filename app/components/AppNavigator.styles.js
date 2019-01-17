import {StyleSheet} from 'react-native'
import base from './base.styles.js'

export const tabBarOptionsStyles = {
  activeTintColor: base.colors.iconHighlight,
  inactiveTintColor: base.colors.iconSecondary,
  showLabel: false,
  showIcon: 'true',
  indicatorStyle: {
    borderBottomColor: base.colors.borderSecondary,
    borderBottomWidth: 2,
  },
  labelStyle: {
    fontSize: 0
  },
  iconStyle: {
    marginTop: 0,
    padding: 0,
    height: 35,
    width: 35,
  },
  style:{
    backgroundColor: base.colors.backgroundPrimary,
    justifyContent: 'center',
  }
};
