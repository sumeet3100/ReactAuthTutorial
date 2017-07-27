import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import InputLogin from './InputLogin';
import LoginForm from './components/LoginForm';

class App extends Component {

  render(){
      return (
        <View style={{flex:1}}>
          <Header headerText =" Authentication "  />
            <View style={{flex:1,justifyContent:'center',backgroundColor:'gray'}}>

            <LoginForm buttonTitle = {"Log in"} mailIdText = {"E-mail id"} mailPassword = {"Password"} checked = {false} />

            </View>
        </View>
      );
    }
}

export default App;
