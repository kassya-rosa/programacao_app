import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Mensagem({frase}) {
     console.log("Mensagem: ", frase);
     return <View style={estilos.container}>
          <Text style={estilos.texto}>{frase}</Text>
     </View>
}

const estilos = StyleSheet.create({
     container: {
          width: 350,
          height: "auto",
          backgroundColor: "#ffffff",
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 4,
          marginTop: 10
     },
     texto: {
          fontSize: 14,
          lineHeight: 20,
          fontWeight: "normal",
          color: "#000000"
     }
});