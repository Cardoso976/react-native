import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetalhePacote extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up DetalhePacote.js to start working on your DetalhePacote!</Text>
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
