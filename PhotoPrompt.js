import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions, Platform } from 'react-native';

export default class PhotoPrompt extends Component {

	press(pick) {
    	this.props.navigator.push({ 
      		id: 2,
      	// We can pass any information we want to the next scene as props
      		passProps: {
        		name: pick
            photo: 

      		}
    	});
  	}

  	//"A" "B" "C" "D" are all place holder

  photoPrompt(){
    //add camera functionality
    render(){
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={() => this.press("Camera")} style={styles.outerButton}>
            <View style={styles.innerButton}>
              <Image source={cameraImg} style={{ height: 200, width: 200 }}/>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Select the word that matches the picture<Text style={{color:'#ff4981'}}>.</Text></Text>
        </View>
      );
    }


  }

  phototaken(){
    //fetch push to google Vision API
    sendPhoto(){

    }
  }

  visionApiReplied(){
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.title}>Select the word that matches the picture<Text style={{color:'#ff4981'}}>.</Text></Text>
          {/*Each button will call the press function with a different Word Tag name*/}
        <TouchableHighlight onPress={() => this.press('A')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.photoTagText}>A</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press("B")} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.photoTagText}>B</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('C')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.photoTagText}>C</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('D')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.photoTagText}>D</Text>
          </View>
        </TouchableHighlight>
        </View>
      );
    }
  }




}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  photoTagText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c9f3e7',
    borderLeftWidth: 5,
    borderColor: '#ff4981'
  }
});

