import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

import Texto from "../../components/Texto";
import Botao from "../../components/Botao";

import Imagem from "../../../assets/steve.jpg"

export default function Quote() {
     return <View style={estilos.org}>
          <Text style={estilos.logo}>Quotes App</Text>
          <View style={estilos.container}>
               <Image source={Imagem} style={estilos.imagem}/>
               <View style={estilos.conteudo}>
                    <Text style={estilos.titulo}>Titulo</Text>
                    <Texto texto={"Frase"}/>
               </View>
          </View>
          <Botao/>
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
          width: 150,
          height: 200,
          borderRadius: 6,
     },
     conteudo: {
          width: 150,
          height: 200,
          flexDirection: "column",
          backgroundColor: "#D2E0FB",
          padding: 16
     },
     titulo: {
          fontWeight: "bold",
          fontSize: 16
     }
})