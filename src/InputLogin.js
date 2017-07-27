
import React,{ Component} from 'react';
import {Text, TextInput, View,Dimensions} from 'react-native';
import { Button, CheckBox, Divider } from 'react-native-elements';
import {Card, CardComponent} from './components/common';
const {height, width}=Dimensions.get('window');

class InputLogin extends Component{
    constructor(props){
      super(props)
    }
state = {userNameText: '',password:'', checked: true};
render(){
    const {textStyle, viewStyle,textinputStyle, buttonStyle} = styles;
    return(
          <View style = {viewStyle}>
                <TextInput style={textinputStyle}
                    placeholder={this.props.mailIdText}
                    returnKeyType = 'next'
                    keyboardType= 'email-address'
                    value = {this.state.userNameText}
                    onChangeText = {userNameText => this.setState({userNameText})}
                />
                <TextInput style={textinputStyle}
                    placeholder={this.props.mailPassword}
                    returnKeyType = 'done'
                    secureTextEntry={true}
                    value = {this.state.password}
                    onChangeText = {password => this.setState({password})}
                  />
                  <View style={{ marginTop: 10, marginLeft: 10} }>
                    <CheckBox
                      left
                      title='Click Here'
                      checked={this.state.checked}
                      style={{ flexWrap: 'wrap'}}
                    />
                  </View>
                  <View   style={{ marginTop: 10 }}>
                    <Button
                      raised

                      title={this.props.buttonTitle} />
                  </View>

        </View>
      );
    };
  }

const styles = {
  viewStyle:{
    backgroundColor: '#F8F8F8',
    paddingTop:15,
    shadowColor: '#000',
    shadowOffset:{ width:0, height: 2},
    shadowOpacity:0.5,
    elevation:2,
    position: 'relative',
    margin: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  textStyle:{
      fontSize: 20
  },
  textinputStyle:{
      fontSize: 20,
      borderColor: 'white',
      borderWidth: 1,
      paddingLeft: 10,
  },
  buttonStyle:{
      backgroundColor: 'blue',
      width: width,
      alignItems:'center'
  }
};

// Make the componenet aviable for other parts of the app.
export default InputLogin;
