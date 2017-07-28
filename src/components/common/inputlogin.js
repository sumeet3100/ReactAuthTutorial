
import React,{ Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import { Button, CheckBox, Divider } from 'react-native-elements';
import Card from './Card';
import CardComponent from './CardComponent';

class Inputlogin extends Component{
  constructor(props){
    super(props)
  }
  state = {userNameText: '',password:''};
  render(){
    const {textStyle, viewStyle,textinputStyle, buttonStyle} = styles;



    return(
      <Card>

      <CardComponent>
      <TextInput style={textinputStyle}

      placeholder={this.props.userName}

returnKeyType = 'next'
      keyboardType= 'email-address'
      value = {this.state.userNameText}
      onChangeText = {userNameText => this.setState({userNameText})}
      />

      </CardComponent>

      <CardComponent>
      <TextInput style={textinputStyle}
      placeholder={this.props.hintPassword}
      returnKeyType = 'done'
      keyboardType = 'numeric'
      value = {this.state.password}
      onChangeText = {password => this.setState({password})}
      />
      </CardComponent>
      <CheckBox
      left
      title='Remmeber me'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      />
      <Divider style={{ backgroundColor: 'blue' }} />
      <View>
      <Button
        raised
        icon={{name: 'home', size: 20}}
        buttonStyle={{backgroundColor: 'blue', borderRadius: 2, marginTop:5, marginBottom:5 }}
        textStyle={{textAlign: 'center'}}
        title={this.props.buttonTitle}
      />
      </View>
      </Card>

    );
  };
};


const styles = {
  viewStyle:{
    backgroundColor: '#F8F8F8',
    paddingTop:15,
      shadowColor: '#000',
      shadowOffset:{ width:0, height: 2},
    shadowOpacity:0.5,
    elevation:2,
    position: 'relative'
  },
  textStyle:{
    fontSize: 20
  },
  textinputStyle:{
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    height: 40,
    margin:5,
    paddingLeft: 10,
    flex:1
  },
  buttonStyle:{
    backgroundColor: 'blue',
    borderWidth: 1,
    height: 20,
    justifyContent: 'center',
    borderRadius: 5
  }
};

// Make the componenet aviable for other parts of the app.
export default Inputlogin;
