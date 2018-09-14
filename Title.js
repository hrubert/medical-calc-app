import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Titration Calculatior</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'blue',
        opacity: 0.5
    },
    text: {
        color: 'white',
    },
})