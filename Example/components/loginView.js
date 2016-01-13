import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from '../styles/style';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Actions = require('react-native-router-flux').Actions;

var Button = require('react-native-button');

 import Firebase from 'firebase';
 const config = require('../config')
//
const itemsRef = new Firebase(`${ config.FIREBASE_ROOT }/items`)


export default class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, login} = this.props;

    return (

        <View style={styles.container}>
            <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
            <View style={styles.header}>
                <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#FFF"
                        value={user}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Password"
                        placeholderTextColor="#FFF"
                        value=''
                    />
                </View>
                <View style={styles.forgotContainer}>
                  <Button style={styles.greyFont} onPress={Actions.forgotPassword}>Forgot Password</Button>
                </View>
            </View>
            <View style={styles.signin}>
                <Text style={styles.whiteFont}>Sign In</Text>
            </View>
            <View style={styles.signup}>
                <Button style={styles.greyFont} onPress={Actions.register}>Don't have an account?</Button>
            </View>
        </View>
    );
  }
}
