'use strict';

var React = require('react-native');
var {View, Text, TextInput, Image,TouchableOpacity} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
import styles from '../styles/style';

class Register extends React.Component {
    render(){

      const {user, register} = this.props;

        return (
          <View style={styles.container}>
              <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={{uri: 'http://imgur.com/68uNRF9.jpg'}} />
                </View>
              <View style={styles.inputs}>
                  <View style={styles.inputContainer}>
                      <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                      <TextInput
                          style={[styles.input, styles.whiteFont]}
                          placeholder="Enter email address"
                          placeholderTextColor="#FFF"
                          value={user}
                      />
                  </View>
                  <View style={styles.inputContainer}>
                      <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                      <TextInput
                          password={true}
                          style={[styles.input, styles.whiteFont]}
                          placeholder="Enter a Password"
                          placeholderTextColor="#FFF"
                          value=''
                      />
                  </View>
              </View>
              <View style={styles.register}>
                <TouchableOpacity onPress={register} style={styles.button}>
                  <Text style={styles.whiteFont}>Sign Up</Text>
                </TouchableOpacity>

              </View>
          </View>
        );
    }
}


module.exports = Register;
