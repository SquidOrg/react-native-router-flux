'use strict';

var React = require('react-native');
var {View, Text, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import Counter from './counter';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

    render(){
      const { state, dispatch } = this.props;
        return (
            <View style={styles.container}>
                <Text>Login2 page douche: {this.props.data}</Text>
                <Button onPress={Actions.pop}>Back</Button>
                  <Counter
                    counter={state.count}
                    {...bindActionCreators(counterActions, dispatch)} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});



module.exports = connect(state => ({
  state: state.counter
}))(Login);
