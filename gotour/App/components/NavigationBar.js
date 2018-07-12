import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up NavigationBar.js to start working on your NavigationBar!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
