'use strict';

var React = require('react-native');
var Firebase = require('firebase');
var {AppRegistry, Navigator, StyleSheet,Text,View} = React;
var Launch = require('./components/Launch');
var Register = require('./components/Register');
var ForgotPassword = require('./components/ForgotPassword');
var Login = require('./components/Login');
var Login2 = require('./components/Login2');
var LoginCt = require('./containers/loginCt');
var RegisterCt = require('./containers/registerCt');
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Error = require('./components/Error');
var Home = require('./components/Home');
var TabView = require('./components/TabView');

import { FIREBASE_ROOT } from './config';
import createStore from './store';
import { Provider } from 'react-redux';


const store = createStore({
  firebase: new Firebase(FIREBASE_ROOT)
});

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

export default class Example extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <Router hideNavBar={true} >
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Schema name="tab" type="switch" icon={TabIcon} />

                <Route name="register" component={Register} title="Register"/>
                <Route name="home" component={Home} title="Replace" type="replace"/>
                <Route name="forgotPassword" component={ForgotPassword} title="Forgot Password" />
                <Route name="login" schema="modal">
                    <Router>
                        <Route name="loginModal" component={Login} title="Login" schema="modal"/>
                        <Route name="loginModal2" component={LoginCt} title="Login2"/>
                    </Router>
                </Route>
                <Route name="register2" component={RegisterCt} title="Register2"  schema="withoutAnimation"/>
                <Route name="tabbar">
                    <Router footer={TabBar} showNavigationBar={false}>
                        <Route name="tab1" schema="tab" title="Tab #1" >
                            <Router>
                                <Route name="tab1_1" component={TabView} title="Tab #1_1" />
                                <Route name="tab1_2" component={TabView} title="Tab #1_2" />
                            </Router>
                        </Route>
                        <Route name="tab2" schema="tab" title="Tab #2" hideTabBar={true} component={TabView} />
                        <Route name="tab3" schema="tab" title="Tab #3" component={TabView} />
                        <Route name="tab4" schema="tab" title="Tab #4" component={TabView} />
                        <Route name="tab5" schema="tab" title="Tab #5" component={TabView} />
                    </Router>
                </Route>
                <Route name="launch" component={Launch} wrapRouter={true} title="Launch" hideNavBar={true} initial={true}/>
            </Router>
            </Provider>
        );
    }
}
