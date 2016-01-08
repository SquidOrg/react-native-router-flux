'use strict';

import React, { Component } from 'react-native';
var Actions = require('react-native-router-flux').Actions;

import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterCt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Counter
        counter={state.count}
        {...bindActionCreators(counterActions, dispatch)} />
    );
  }
}

module.exports = connect(state => ({
  state: state.counter
}))(CounterCt);
