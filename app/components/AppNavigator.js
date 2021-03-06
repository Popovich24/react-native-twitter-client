'use strict';

import React from 'react'
import {Platform, StatusBar} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import {Routes, timelineStackRoutes} from '../config/routes'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ConfigScreen from '../screens/ConfigScreen'
import PostScreen from '../screens/PostScreen'
import UserProfileScreen from '../screens/UserProfileScreen'
import LoggedInUserProfileScreen from '../screens/LoggedInUserProfileScreen'
import CameraScreen from '../screens/CameraScreen'
import {tabBarOptionsStyles, topBarIconStyle} from './AppNavigator.styles.js'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const timelineStack = createStackNavigator({
  Home:  HomeScreen,
  UserProfile: UserProfileScreen,
  Post: PostScreen,
},{
    initialRouteName: 'Home',
  },
);

timelineStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
   return {
    tabBarVisible,
  };
};

const searchStack = createStackNavigator({
  Search:  SearchScreen,
  UserProfile: UserProfileScreen,
  Post:  PostScreen
});

searchStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const loggedInUserProfileStack = createStackNavigator({
  LoggedInUserProfile:  LoggedInUserProfileScreen,
  Post:  PostScreen,
  Camera: CameraScreen,
});

loggedInUserProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const RootNavigator = createMaterialTopTabNavigator({

  Home: timelineStack,
  Search: searchStack,
  Config: { screen: ConfigScreen},
  LoggedInUserProfile: loggedInUserProfileStack,

},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case "Home": {
          iconName = "ios-home";
          break;
        }
        case "Config": {
          iconName = "ios-cog";
          break;
        }
        case 'LoggedInUserProfile': {
          iconName = "ios-person";
          break;
        }
        case "Search": {
          iconName = "ios-search";
          break;
        }
        default: {
          iconName = "ios-notifications"
        }
      }
      return <Ionicons name={iconName} style={topBarIconStyle} size={topBarIconStyle.fontSize} color={tintColor} />;
    },
  }),
  tabBarOptions: tabBarOptionsStyles,
  animationEnabled: false,
  swipeEnabled: false,
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
