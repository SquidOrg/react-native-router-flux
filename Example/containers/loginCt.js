'use strict';

import React, { Component } from 'react-native';
var Actions = require('react-native-router-flux').Actions;

import {bindActionCreators} from 'redux';
import Login from '../components/loginView';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class LoginCt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Login
        counter={state.count}
        {...bindActionCreators(counterActions, dispatch)} />
    );
  }
}

module.exports = connect(state => ({
  state: state.counter
}))(LoginCt);
