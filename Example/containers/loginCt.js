'use strict';

import React, { Component } from 'react-native';
var Actions = require('react-native-router-flux').Actions;

import {bindActionCreators} from 'redux';
import Login from '../components/LoginView';
import * as authActions from '../actions/authActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class LoginCt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, dispatch } = this.props;

    return (
      <Login
        user={user}
        {...bindActionCreators(authActions, dispatch)} />
    );
  }
}

module.exports = connect(state => ({
  user: state.auth
}))(LoginCt);
