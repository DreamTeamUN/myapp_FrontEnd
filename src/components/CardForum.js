import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Text, Button, Icon, Left, Body, Right, Form, Input, Item, Label, Textarea } from 'native-base';
import { createPost } from '../utils/CreatePost';
import Expo from "expo";
export default class CardForum extends Component {

  constructor(props) {
      super(props);
      this.state = {
          titulo: '',
          texto: '',
          resumen: '',
          error: '',
      };
  }

  async _createNewPost() {
          await this.setState({ resumen: this.state.texto.substr(0,12) });
          console.log(this.state.resumen)
          try {
            let response = await createPost(this.state.titulo, this.state.texto, this.state.resumen);
            console.log(response.status)
            if (response.status >= 200 && response.status < 300){
              this.props.navigation.navigate('HomeForum')
              console.log("createPost Done")
            }else{
                this.setState({ error: "Algo salio mal" });
            }
          }catch(error){
              this.setState({ error: error })
              console.log("error: " + error)
          }
  }


  render() {
    return (
      <Container>
          <Header />
          <Content>
            <Form>
            <Item regular>
          <Input placeholder='Titulo' onChangeText={(titulo) => this.setState({ titulo })}
          value={this.state.titulo} />
              </Item>
              <Textarea rowSpan={5} bordered placeholder="Texto" onChangeText={(texto) => this.setState({ texto })}
              value={this.state.texto}/>
            </Form>
            <Button info onPress={this._createNewPost.bind(this) }><Text style={{flex: 1}}> Enviar </Text></Button>
          </Content>
        </Container>
    );
  }
}
