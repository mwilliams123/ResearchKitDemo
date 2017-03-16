import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation'
//import Page from './components/page1'

class Terms extends Component {
  static navigationOptions = {
    header: {style: {backgroundColor: '#FFFFFF'}}
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
              <Text style={styles.welcome}>
                Review
              </Text>
              <Text style={styles.instructions}>
                Review the form below and tap Agree if you're ready to continue
              </Text>
              <Text style={styles.title}>
                Terms & Conditions
              </Text>
              <Text style={styles.text}>
                Vivamus laoreet erat sit amet tincidunt scelerisque. Maecenas odio sapien, molestie eu vulputate sodales, tincidunt at neque. Nunc venenatis velit et ligula dictum, eget accumsan felis consectetur. Donec scelerisque fermentum vestibulum. Nam molestie finibus mauris, id congue lectus ultrices eu. Nunc et odio vitae dui interdum dictum. Proin sagittis leo quam. Proin vulputate massa ac orci pulvinar, eget rhoncus urna congue. Sed ut vehicula tellus, eget scelerisque enim. Cras lobortis diam at faucibus scelerisque. Curabitur pharetra arcu erat, nec tincidunt mi eleifend ut. Nunc suscipit risus vitae consectetur sodales. Aenean vitae lectus odio. Phasellus diam orci, accumsan non elementum at, finibus condimentum mauris. Nullam est enim, rhoncus a rutrum sed, laoreet a magna.
              </Text>

        </ScrollView>
        <View style={styles.button}>
          <Button
            onPress={() => navigate('Home')}
            title='Disagree' />
          <Button
              onPress={() => navigate('Home')}
              title='Agree' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 15,
    margin: 20,
    marginBottom: 40,
  },
  text: {
    margin: 10
  },
  title: {
    margin: 10,
    fontWeight: 'bold',
    marginBottom: 10
  },
  button: {
    justifyContent: 'space-between',
    //justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height:50,
    bottom: 0,
    borderTopColor: '#D3D3D3',
    borderTopWidth: 1,
    flexDirection: 'row',

  },



});

export default Terms
