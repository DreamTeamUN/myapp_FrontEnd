import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, AsyncStorage, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Title, Left, Right, Body, Text, Button, Icon } from 'native-base';
import { API } from '../config/const';
import { getToken, removeToken } from '../utils/logIn';
import { setUserData, getUsername, getTipoUsuario, getFullname, getFileUrl } from '../utils/home';
import styles from '../styles';

const ButtonHome = (props) => {
  return (
    <View style={styles.viewButtonHome}>
      <Button full iconLeft rounded style={props.styleButton}
        onPress={props.onPress}>
        <Icon type={props.typeIcon} name={props.nameIcon} />
        <Text style={{flex: 1}}>{props.text}</Text>
      </Button>
    </View>
  )
}

export default class HomeAdult extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      fullname: '',
      tipoUsuario: '',
      source: { uri: '' }, // machetazo (src: https://github.com/facebook/react-native/issues/12606#issuecomment-363397371),
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true })
    try {
      let token = await getToken()
      console.log("HomeAdult componentWillMount | token: " + token)
      await setUserData(token);
      this.setState({
        username: await getUsername(),
        fullname: await getFullname(),
        tipoUsuario: await getTipoUsuario(),
        source: { uri: `${API}${await getFileUrl()}` + '?' + new Date() },
      })
      console.log("HomeAdult | user: " + this.state.username)
    } catch (error) {
      console.log("HomeAdult componentWillMount | Something went wrong")
    }
    await this.listarFrasesPNL()
    this.setState({ isLoading: false })
  }

  // Funcion que hace de F5 (refresh) cuando se viene de editar perfil
  handleOnNavigateBack = async () => {
    console.log("handleOnNavigateBack")
    let reload = (await AsyncStorage.getItem('reload') == 'true');
    if (reload) {
      await this.componentWillMount();
    }
  }

  generateRandomNumber(min, max) {
    let random_number = Math.random() * (max - min) + min;
    return Math.floor(random_number);
  }

  async listarFrasesPNL() {

    this.setState({ isLoading: true });
    const URL = API.concat("/tipo_usuarios/").concat(this.state.tipoUsuario).concat("/frase_pnls");
    console.log("URL estudiante: " + URL)
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();

      this.setState({
        frases: responseJson,
        fraseseleccionada: responseJson[this.generateRandomNumber(0, responseJson.length)].frase, //imprimir más
      });
      console.log(this.state.fraseseleccionada);
    }
    catch (error) {
      console.error("Error en la consulta: " + error);
      this.setState({ isLoading: false });
    }
  }

  _signOutAsync = async () => {
    console.log("Cerrando sesion...")
    removeToken()
    this.props.navigation.navigate('Auth');
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Header style={styles.headerStyle}></Header>
          <Content>
            <View>
              <View style={styles.home_TextContainer}>
                <Text style={styles.headling}>Cargando</Text>
                <ActivityIndicator size="large" color="#4267B2" />
              </View>
            </View>
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Image
              style={styles.profilePhoto}
              // source={ uri: this.state.photoURL + '?' + new Date()}
              source={this.state.source}
            />
          </Left>

          <Body>
            <Title>Bienvenido</Title>
          </Body>

          <Right />
        </Header>
        <Content>
          <ScrollView>
            <View style={styles.homeAdult_TextContainer}>
              <Text style={styles.headling}>¡Bienvenido, {this.state.fullname}!</Text>
              <Text style={styles.frasePNL}>“{this.state.fraseseleccionada}”</Text>
            </View>

            <View style={styles.homeAdult_buttonsContainer}>

              <ButtonHome styleButton={styles.buttonclear}
                typeIcon={"Feather"} nameIcon={"edit"}
                onPress={() => this.props.navigation.navigate('EditProfile', {
                  onNavigateBack: this.handleOnNavigateBack
                })}
                text={'Editar perfil'} />

              <ButtonHome styleButton={styles.buttondark}
                typeIcon={"MaterialCommunityIcons"} nameIcon={"forum"}
                onPress={() => this.props.navigation.navigate('HomeForum')} text={'Ingreso al foro'} />

              { // Adulto
                this.state.tipoUsuario == 1 && <ButtonHome styleButton={styles.buttonclear}
                  typeIcon={"MaterialCommunityIcons"} nameIcon={"settings"}
                  onPress={() => this.props.navigation.navigate('AdminStudentsTutor')} text={'Estudiantes'} />
              }

              { // Docente
                this.state.tipoUsuario == 2 && <ButtonHome styleButton={styles.buttonclear}
                  typeIcon={"MaterialCommunityIcons"} nameIcon={"settings"}
                  onPress={() => this.props.navigation.navigate('ClassRoom')} text={'Aulas'} />
              }

              <View style={styles.viewButtonHome}>
                <Button full iconLeft rounded style={styles.buttondark}
                  onPress={this._signOutAsync}>
                  <Icon type="Entypo" name="log-out"/>
                  <Text style={{flex: 1}}>Cerrar sesión</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  } // end of render()
}
