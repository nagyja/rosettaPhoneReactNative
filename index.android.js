import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

// Importing scenes for our app
import Translation from './Translation';
import PhotoPrompt from './PhotoPrompt';
import Login from './Login';

class RosettaPhoneApp extends Component {
	//chooses which "scene" will be rendered based on route
	renderScene (route, navigator){
		if (route.id === 1) {
     		return <Translation navigator={navigator} />
   		} 
    	else if (route.id === 2) {
     		return <PhotoPrompt navigator={navigator} {...route.passProps} />
    	} 
    	else if (route.id === 3) {
      		return <Login navigator={navigator} />
    	}
 	}
 // The configureScene function allows us to change the animation properties of a scene
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      // Our Navigator handles the transition between different scenes in our app
      <Navigator
        // The first page we are going to render
        initialRoute={{ id: 3 }}
        // Passing in our renderScene function
        renderScene={this.renderScene}
        // Passing in our configureScene function
        configureScene={this.configureScene}
      />
    );
  }
});

AppRegistry.registerComponent('RosettaPhoneApp', () => RosettaApp);
