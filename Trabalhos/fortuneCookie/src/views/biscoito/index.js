import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Botao from "../../components/Botao";
import Mensagem from "../../components/Mensagem";

import biscoito from "../../../assets/cookie-1.png";
import biscoitoOpen from "../../../assets/cookie-2.png";
import frases from "../../mocks/frases";

export default function TelaInicial() {
     const [imagem, setImagem] = useState(biscoito);
     const [textoVisivel, setMostrar] = useState(false);
     const [mensagem, setMensagem] = useState("");

     const trocarImagem = () => {
          console.log("Frase: ", frases);
          setImagem(imagem === biscoito ? biscoitoOpen : biscoito);
          setMostrar(!textoVisivel);
          setMensagem(selecionarMensagem());
     };

     const selecionarMensagem = () => {
          const indiceAleatorio = [Math.floor(Math.random() * frases.length)];
          console.log("Indice: ", indiceAleatorio);
          return frases[indiceAleatorio];
     }

     return <View style={estilos.container}>
          <Text style={estilos.logo}>Fortune Cookie</Text>
          <Image source={imagem} accessibilityLabel={"Biscoito"} style={estilos.imagem}/>
          <Botao onPress={trocarImagem}/>
          {textoVisivel && <Mensagem frase={mensagem} />}
     </View>
}

const estilos = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#FFEAC5",
          justifyContent: "center",
          alignItems: "center"
     },
     logo: {
          fontSize: 40,
          fontWeight: "bold",
          color: "#D99559",
          marginBottom: 40
     },
     imagem: {
          width: 200,
          height: 200,
          marginBottom: 16
     }
})