import React from 'react';
import {View, TextInput} from 'react-native';


const DefaultTextInput= ({label}})=>{

    return(

        <View>

          <Text>{label}</Text>
          <TextInput
            style = {{height:20, width:100}}

          />
        </View>

    );




}

export {Input};
