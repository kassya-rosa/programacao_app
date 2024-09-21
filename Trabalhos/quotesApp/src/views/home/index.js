import React, {useState} from "react";
import { Text, Image, StyleSheet, View } from "react-native";

import Texto from "../../components/Texto";
import Botao from "../../components/Botao";
import { requisicaoCitacao, obterCitacaoImagem } from "../../services/requisicao";

import Imagem from "../../../assets/steve.jpg"

export default function Quote() {
     const [dados, setDados] = useState({citacao: null, imagem: null});

     const handlePress = async () => {
          const resultado = await obterCitacaoImagem();
          setDados(resultado)
      };

     return <View style={estilos.org}>
          <Text style={estilos.logo}>Quotes App</Text>
          <Image source={Imagem} style={estilos.imagem}/>
          <View style={estilos.conteudo}>
               <Text style={estilos.titulo}>Titulo</Text>
               <Texto texto={"Frase"}/>
          </View>
          <Botao onPress={handlePress}/>
     </View>
}

const estilos = StyleSheet.create({
     logo: {
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 20
     },
     org: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },
     container: {
          flexDirection: "row"
     },
     imagem: {
          width: 250,
          height: 250,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
     },
     conteudo: {
          width: 250,
          height: "auto",
          flexDirection: "column",
          backgroundColor: "#D2E0FB",
          padding: 16
     },
     titulo: {
          fontWeight: "bold",
          fontSize: 16
     }
})