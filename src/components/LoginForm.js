import React, {Component} from 'react';
import {Card, CardComponent,Input} from './common';
import { Button } from 'react-native-elements';


class LoginForm extends Component{
  constructor(props){
    super(props)
  }
  state ={text: ''};

  render(){
    return(
      <Card>
        <CardComponent>
            <Input
              placeholder={this.props.mailIdText}
              value ={this.state.text}
              onChangeText={text=> this.setState(text)}
            />
        </CardComponent>

        <CardComponent>
            <Input
              placeholder={this.props.mailPassword}
              value ={this.state.text}
              onChangeText={text=> this.setState(text)}
            />
        </CardComponent>

        <Button
          raised
          icon={{name: 'home', size: 20}}
          buttonStyle={{backgroundColor: 'blue', borderRadius: 2, marginTop:5, marginBottom:5 }}
          textStyle={{textAlign: 'center'}}
          title={this.props.buttonTitle}
        />

      </Card>
    );
  };
}

// Make the componenet aviable for other parts of the app.
export default LoginForm;
