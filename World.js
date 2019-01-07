import React from 'react';
import { StyleSheet, Text } from 'react-native';

export class World extends React.Component {
  render() {
    return (
      <Text style={styles.textred}>World!</Text>
    );
  }
}

const styles = StyleSheet.create({
  textred: {
    color: 'red',
    fontSize: 70,
  },
});