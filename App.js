import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { World } from './World.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, 
          <World />
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transform: [{ rotate: '45deg'}]
    
  },
  text: {
    color: 'white',
    fontSize: 70,
    transform: [{ rotate: '315deg'}]
    
  },
  textred: {
    color: 'red',
    fontSize: 70,
  },
});