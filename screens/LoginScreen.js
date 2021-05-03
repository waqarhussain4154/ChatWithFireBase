import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ant from 'react-native-vector-icons/AntDesign';
import firebase from 'firebase';
export default class LoginScreen extends Component {
  state = {
    name: '',
  };
 
  continue = () => {
    this.props.navigation.navigate('ChatScreen', {name: this.state.name});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 64}}>
          <FontAwesome5
            style={{width: 100, height: 100, alignSelf: 'center'}}
            name="bars"
            size={40}
            color="grey"
          />
        </View>
        <View style={{marginHorizontal: 32}}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Design in to code"
            onChangeText={(name) => {
              this.setState({name});
            }}
            value={this.state.name}
          />
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Ant
                
                name="arrowright"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -123,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32,
  },
  input: { 
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairLineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: '600',
  },
  continue:{
      width:70,
      height:70,
      borderRadius:70/2,
      backgroundColor:"#9075E3",
      alignItems:"center",
      justifyContent:"center"
  }
});
