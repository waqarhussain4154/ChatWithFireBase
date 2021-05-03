import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../Fire';

export default class ChatScreen extends Component {
  state = {
    messages: [],
  };
  get user() {
      console.log('Fire.uid', Fire)
    return {
      _id: Fire.uid,
      name: this.props.route.params.name,
    };
  }
  componentDidMount() {
      console.log('props', this.props)
    Fire.get(message =>
      this.setState(previous => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }
  componentWillMount(){
      Fire.off();
  }
  render() {
      const chat=<GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />
      if(Platform.OS==='android'){
          return(
              
              <KeyboardAvoidingView style={{flex:1,}} behavior="padding" keyboardVerticalOffset={-300} enabled>
                  
                  {chat}
                  
              </KeyboardAvoidingView>
          );
      }
      return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
  }
}

const styles = StyleSheet.create({});
