import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation'
//import Page from './components/page1'

class Welcome extends Component {
  static navigationOptions = {
    header: {style: {backgroundColor: '#FFFFFF'}}
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.welcome}>
            Welcome!
          </Text>
          <Text style={styles.instructions}>
            Click the button to get started
          </Text>
          <Button
            onPress={() => navigate('Page', {screen: 0})}
            title='Get Started' />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 100
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 15,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 40,
  },
});

export default Welcome
