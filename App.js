import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './Title.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Title />
        <Text>Tracy is learning to program apps.</Text>
        <Text>This is my first app.</Text>
        <Text>Hello Levi and Skittles.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
