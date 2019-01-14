/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react'
 import { AppRegistry, Platform, StatusBar, View, Text, AsyncStorage, Alert } from 'react-native'
 import { Provider } from 'react-redux'

 import AppReducer from './app/store/appReducer'
 import { AppNavigator, middleware } from './app/components/AppNavigator'
 import {store} from './app/store'
 import PushController from './app/components/notification/PushController.js';

 export class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
        <PushController />
      </Provider>
    );
  }
 }

 export default App;
