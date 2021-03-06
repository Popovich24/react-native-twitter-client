import React from 'react'
import { StyleSheet, Text, View, Button, Animated, Easing, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import {StackNavigator} from 'react-navigation'
import SearchForm from './../components/search/searchForm'
import TrendList from './../components/trends/trendList'
import PostList from './../components/post/postList'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import Fade from './../components/animation/fade'

import {
  requestSearchForPost,
  requestSearchMorePost,
  resetPostSearch} from '../store/post/postActions'
import {requestTrendsLoad, resetTrends} from '../store/trend/trendActions'
import {styles} from './SearchScreen.styles.js'

export class SearchScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchKeyword: '',

      shouldDisplayTrends: true,
      shouldDisplaySearchResults: false,
    };
  }

  componentDidMount = () => {
    this.props.requestTrendsLoad();
  }

  setSearchKeyword = (keyword) => {
    this.setState({
      searchKeyword: keyword,
    })
  }

  handleOnTrendPress = (trend) => {
    if (trend.name !== this.props.searchKeyword) {
      this.props.requestSearchForPost(trend.query);
      this.setSearchKeyword(trend.name);
    }
  }

  handleOnSearchFormReset = () => {
    this.props.resetPostSearch();
    this.props.resetTrends();
    this.props.requestTrendsLoad();
    this.setSearchKeyword('');
  }

  handleOnSubmitSearchForm = (keyword) => {
    if (keyword !== this.props.searchKeyword) {
      this.props.requestSearchForPost(keyword);
    }
  }

  handleOnDoneFadingOutSearchResults = () => {
    if (!this.props.hasSearched){
      this.setShouldDisplaySearchResults(false);
      this.setShouldDisplayTrends(true);
    }
  }

  handleOnDoneFadingOutTrends = () => {
    this.setShouldDisplayTrends(false);
    this.setShouldDisplaySearchResults(true);
  }

  setShouldDisplayTrends = (value) => {
    this.setState({
      shouldDisplayTrends: value,
    });
  }

  setShouldDisplaySearchResults = (value) => {
    this.setState({
      shouldDisplaySearchResults: value,
    });
  }

  render = () => {

    return (
      <View style={styles.container}>
        <SearchForm
          animated
          hasSearched={this.props.hasSearched}
          onSearchInputTextChange={this.setSearchKeyword}
          searchValue={this.state.searchKeyword}
          onReset={this.handleOnSearchFormReset}
          onSubmit={(keyword) => { this.handleOnSubmitSearchForm(keyword) }} />
        {(this.props.loadingTrends || this.props.loadingSearch) &&
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator animating={true}/>
          </View>
        }
        {this.state.shouldDisplayTrends && !this.props.loadingTrends &&
          <Fade
            visible={!this.props.hasSearched && !this.props.loadingTrends}
            onDoneFadingOut={this.handleOnDoneFadingOutTrends}>

            <View>
              <Text style={styles.trendTitle}>Trends for you</Text>
              <TrendList
                trends={this.props.trends}
                onItemPress={(trend) => { this.handleOnTrendPress(trend) }}
              />
            </View>

          </Fade>
        }
        {this.state.shouldDisplaySearchResults &&
          <Fade
            visible={this.props.hasSearched && !this.props.loadingSearch}
            onDoneFadingOut={this.handleOnDoneFadingOutSearchResults}>
            <PostList
              navigation={this.props.navigation}
              data={this.props.searchResult}
              onEndReached={this.props.requestSearchMorePost}
            />
          </Fade>
        }
      </View>
    );
  };

  static navigationOptions = {
    header: null,
  };

}

const mapStateToProps = (state) => {
    return {
        loadingTrends: state.TrendReducer.loadingTrends,
        trends: state.TrendReducer.trends,

        searchKeyword: state.PostReducer.searchKeyword,
        hasSearched: state.PostReducer.hasSearchedForPost,
        loadingSearch: state.PostReducer.loadingSearchPost,
        searchResult: state.PostReducer.searchPost,
        loadingMoreSearchResults: state.PostReducer.loadingMoreSearchPost,
    }
}

const mapDispatchToProps = {
  requestTrendsLoad: () => requestTrendsLoad(),
  requestSearchForPost: (searchKeyword) => requestSearchForPost(searchKeyword),
  requestSearchMorePost: () => requestSearchMorePost(),
  resetPostSearch: () => resetPostSearch(),
  resetTrends: () => resetTrends(),
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
