import React, {Component} from 'react';
import {Card, CardComponent,Input, Spinner} from './common';
import { Button } from 'react-native-elements';
import { Alert, StyleSheet,Keyboard } from 'react-native';
import Fetch from 'react-native-fetch';



class LoginForm extends Component{
  constructor(props){
    super(props)
  }
  state ={email: '', password: '', loading: false};
  // custom function
   onLoginButton(email,password) {
     console.log("in login function "+email+" <> "+password);
     Keyboard.dismiss();
     if(email == '' && password == ''){
        console.log("empty mail id");
        Alert.alert('Please enter email id and password.')

     }else if(email == ''){
        console.log("password empty");
        Alert.alert('Please enter email id.')
     }else if(password == ''){
        console.log("password empty");
        Alert.alert('Please enter password.')
     }

     this.setState({loading: true});

fetch('http://52.39.212.226:4075/users/userlogin', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "username" : "customer3@gmail.com",
    "password" : "123456789",
    "loginType" : 1
  })
}).then((response) => response.json())
      .then((response) => {
                console.log("log is out"+ response);
                   this.setState({loading: false, email: '', password: ''});
        }, function() {
          // do something with new state
        });



  }


  renderButton(){

    if(this.state.loading){

      return <Spinner size="small"/>;
    }


  }


  render(){
    return(
      <Card>
        <CardComponent>
            <Input
              autoCorrect={false}
              label="Email"
              placeholder="user@gmail.com"
              value ={this.state.email}
              onChangeText={email=> this.setState({email})}
            />
        </CardComponent>

        <CardComponent>
            <Input
              label="Password"
              placeholder={this.props.mailPassword}
              value ={this.state.auth}
              onChangeText={ password => this.setState({password})}
            />
        </CardComponent>

        <Button
          raised
          icon={{name: 'home', size: 20}}
          buttonStyle={{backgroundColor: 'blue', borderRadius: 2, marginTop:5, marginBottom:5 }}
          textStyle={{textAlign: 'center'}}
          title={this.props.buttonTitle}
          onPress={()=>this.onLoginButton(this.state.email,this.state.password)}
        />

        <CardComponent>
          {this.renderButton()}
          </CardComponent>


      </Card>
    );
  };


}

// Make the componenet aviable for other parts of the app.
export default LoginForm;
