
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import Welcome from './components/welcome'
import Page from './components/page1'
import Terms from './components/terms'
import { StackNavigator } from 'react-navigation';



const NewProject = StackNavigator({
  Home: {screen: Welcome},
  Page: {screen: Page},
  Terms: {screen: Terms}
},

);


AppRegistry.registerComponent('NewProject', () => NewProject);
