'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Login from '../components/login';
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
    const { state, dispatch } = this.props;

    return (
      <Login
        user={state.auth.user}
        {...bindActionCreators(authActions, dispatch)} />
    );
  }
}

export default connect(state => ({
  state: state.auth.user
}))(LoginCt);
