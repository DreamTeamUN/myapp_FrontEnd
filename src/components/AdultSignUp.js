import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, Text, TouchableNativeFeedback, TextInput, View, ScrollView } from 'react-native';
import styles from '../styles';

export default class AdultSignUp extends Component {
  static navigationOptions = {
    title: 'Registro adulto',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      email: '',
      telephone: ''
    };
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
          <TextInput
            style={styles.adult_TextInput}
            secureTextEntry={true}
            placeholder="Repetir contraseña"
            onChangeText={(password2) => this.setState({ password2 })}
          />
          <TextInput
            style={styles.adult_TextInput}
            placeholder="Correo electronico"
            onChangeText={(email) => this.setState({ email })}
          />

          {/* <Text style={{padding: 10, fontSize: 20}}>
          {this.state.email}
        </Text> */}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableNativeFeedback onPress={() => Alert.alert('Añadir estudiante')} >
            <View style={[styles.button, styles.buttonBlueA]}>
              <Text style={styles.buttonText}>Añadir estudiante</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Alert.alert('Finalizar registro')} >
            <View style={[styles.button, styles.buttonBlueB]}>
              <Text style={styles.buttonText}>Finalizar registro</Text>
            </View>
          </TouchableNativeFeedback>
        </View >

      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   nombre: {
//     atributo: valor,
//   },
// });