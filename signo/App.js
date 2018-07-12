import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import DetalhesSigno from './DetalhesSigno'
import ListaSignos from './ListaSignos'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'

export default class App extends Component {
  render() {
    return (
      <Router>
        <View style={ styles.container }>
          <Switch>
            <Route path='/:idSigno' component={DetalhesSigno}/>
            <Route path='/' component={ListaSignos}/>
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
