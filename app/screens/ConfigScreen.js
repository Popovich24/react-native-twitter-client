import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import {NotificationController} from '../components/notification/notificationController'

import ConfigList from './../components/configuration/ConfigList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  configToggleVerifiedOnly,
  configToggleDoNotFollow,
  configToggleHaveDefaultInformation,
  configToggleContainsLink,
  configToggleTextTruncated,
} from '../store/configuration/configurationActions';

export class ConfigScreen extends React.Component {

  constructor(props) {
    super(props);

    this.notificationController = new NotificationController();
  }

  handleConfigToggleVerifiedOnly = () => {
    if (!this.props.configVerifiedOnly) {
      this.notificationController.setUpSilencedVerifiedAccountsNotification();
    } else {
      this.notificationController.tearDownSilencedVerifiedAccountsNotification();
    }

    this.props.configToggleVerifiedOnly();

  }

  handleConfigToggleDoNotFollow = () => {
    if (!this.props.configDoNotFollow) {
      this.notificationController.setUpSilencedDoNotFollowNotification();
    } else {
      this.notificationController.tearDownSilencedDoNotFollowNotification();
    }
    this.props.configToggleDoNotFollow();
  }

  handleConfigToggleHaveDefaultInformation = () => {
    if (!this.props.configHaveDefaultInformation) {
      this.notificationController.setUpSilencedHaveDefaultProfileNotification();
    } else {
      this.notificationController.tearDownSilencedHaveDefaultProfileNotification();
    }
    this.props.configToggleHaveDefaultInformation();
  }

  handleConfigToggleContainsLink = () => {
    if (!this.props.configContainsLink) {
      this.notificationController.setUpSilencedPostThatContainLinkNotification();
    } else {
      this.notificationController.tearDownSilencedPostThatContainLinkNotification();
    }
    this.props.configToggleContainsLink();
  }

  handleConfigToggleTextTruncated = () => {
    if (!this.props.configTextTruncated) {
      this.notificationController.setUpSilencedPostThatHaveTextTruncated();
    } else {
      this.notificationController.tearDownSilencedPostThatHaveTextTruncated();
    }
    this.props.configToggleTextTruncated();
  }

  render = () => {
    return (
    <View style={styles.container}>
      <ConfigList
        configVerifiedOnly={this.props.configVerifiedOnly}
        configDoNotFollow={this.props.configDoNotFollow}
        configHaveDefaultInformation={this.props.configHaveDefaultInformation}
        configContainsLink={this.props.configContainsLink}
        configTextTruncated={this.props.configTextTruncated}

        configToggleVerifiedOnly={this.handleConfigToggleVerifiedOnly}
        configToggleDoNotFollow={this.handleConfigToggleDoNotFollow}
        configToggleHaveDefaultInformation={this.handleConfigToggleHaveDefaultInformation}
        configToggleContainsLink={this.handleConfigToggleContainsLink}
        configToggleTextTruncated={this.handleConfigToggleTextTruncated}
      />
    </View>);
  }
};

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ConfigScreen.navigationOptions = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

function mapStateToProps(state, props) {
  return {
    configVerifiedOnly: state.ConfigurationReducer.configVerifiedOnly,
    configDoNotFollow: state.ConfigurationReducer.configDoNotFollow,
    configHaveDefaultInformation: state.ConfigurationReducer.configHaveDefaultInformation,
    configContainsLink: state.ConfigurationReducer.configContainsLink,
    configTextTruncated: state.ConfigurationReducer.configTextTruncated,
  }
}

const mapDispatchToProps = {
  configToggleVerifiedOnly: () => configToggleVerifiedOnly(),
  configToggleDoNotFollow: () => configToggleDoNotFollow(),
  configToggleHaveDefaultInformation: () => configToggleHaveDefaultInformation(),
  configToggleContainsLink: () => configToggleContainsLink(),
  configToggleTextTruncated: () => configToggleTextTruncated(),
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen);
