import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

import logo from "../../../assets/logo.png";
import Botao from "../../components/Botao";

const { width } = Dimensions.get("window");  // Dimensões da tela

export default function Restaurante() {
     const [contador, setContador] = useState(0);

     const saidaClientes = () => {
          if(contador > 0) {
               setContador(contador - 1)
          }
          
     }

     return <View style={estilos.container}>
          <Image source={logo} style={estilos.imagem}/>
          <Text style={estilos.texto}>{`${contador} clientes`}</Text>
          <View style={estilos.rodape}>
               <Botao texto={"Registrar saída"} onPress={saidaClientes}/>
               <Botao texto={"Registrar entrada"} onPress={() => setContador(contador + 1)}/>
          </View>
     </View>
}

const estilos = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#E6AA55",
          padding: 32,
          justifyContent: "center",
          alignItems: "center",
     },
     imagem: {
          width: width * 0.6,
          height: width * 0.6 * (9 / 16),
          resizeMode: "cover",
          marginBottom: 32
     },
     texto: {
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 16
     },
     rodape: {
          flexDirection: "row",
          columnGap: 16
     }
});