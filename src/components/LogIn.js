import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, TextInput, View, ScrollView} from 'react-native';
import styles from '../styles';

export default class LogIn extends Component {
  // static navigationOptions = {
  //   title: 'Titulo',
  // };

  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.state = { password: '' };
  }

  render() {
    return (
      <ScrollView>

        <View style={styles.adult_TextInputContainer}>
          <TextInput
            style={styles.adult_TextInput}
            // textContentType={'username'} // IOS
            placeholder="Nombre de usuario"
            maxLength={45}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            style={styles.adult_TextInput}
            secureTextEntry={true}
            // textContentType='password' // IOS
            placeholder="Contraseña"
            onChangeText={(password) => this.setState({ password })}
          />

          {/* <Text style={{padding: 10, fontSize: 20}}>
          {this.state.username}
        </Text> */}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableNativeFeedback onPress={() => Alert.alert('Enviar')} underlayColor="white">
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Enviar</Text>
            </View>
          </TouchableNativeFeedback>
        </View >

      </ScrollView>
    );
  }
}