
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  textAlign,
  View
} from 'react-native';

class LoginPage extends Component {
  render(){
    return(
<Container>
  <Content>
    <Form>
      <Item>
        <Input placeholder="Username" />
      </Item>
      <Item last>
        <Input placeholder="Password" />
      </Item>
    </Form>
  </Content>
</Container>
)
};
};

export default LoginPage;
