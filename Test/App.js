/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 
const data= {key: 'Devin'};
const hi = {name : 'jong'};

const Item = (p) =>{
  return(
    <Text>{p.chars.key}</Text>
  ) 
}

function App(){
  return (
    <View style={{padding : 50}}>
        <Item chars ={data}/>
    </View>
  );
};

export default App;
  