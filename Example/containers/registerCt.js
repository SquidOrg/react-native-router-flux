'use strict';

import React, { Component } from 'react-native';
var Actions = require('react-native-router-flux').Actions;

import {bindActionCreators} from 'redux';
import Register from '../components/Register';
import * as authActions from '../actions/authActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class RegisterCt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, dispatch } = this.props;

    return (
      <Register
        user={user}
        {...bindActionCreators(authActions, dispatch)} />
    );
  }
}

module.exports = connect(state => ({
  user: state.auth.user
}))(LoginCt);
