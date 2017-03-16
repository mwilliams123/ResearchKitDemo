import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Button} from 'react-native';

import { StackNavigator } from 'react-navigation'
//var ScrollableTabView = require('react-native-scrollable-tab-view');

class Page extends Component {
  static navigationOptions = {
    header: {style: {backgroundColor: '#FFFFFF'}}
  }
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { title: 'Title 1', description: 'This is a description'},
        { title: 'Title 2', description: 'This is another description'},
        { title: 'Title 3', description: 'This is a description'}
      ]
    }
  }

  render() {
    const { params } = this.props.navigation.state
    const { navigate } = this.props.navigation;
    var next = params.screen + 1
    var next_screen = next >= this.state.items.length  ? 'Terms' : 'Page';
    return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
            <Text style={styles.welcome}>
              {this.state.items[params.screen].title}
            </Text>
            <Text style={styles.instructions}>
              {this.state.items[params.screen].description}
            </Text>

      </View>
      <View style={styles.button_container}>
        <Button
          onPress={() => navigate(next_screen, {screen: next})}
          title='Next' />
      </View>
    </View>
    )

  }
}

const styles = StyleSheet.create({
  button_container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height:100,
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'

  },

  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 15,
  },

});

export default Page
