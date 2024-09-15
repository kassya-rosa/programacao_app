import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({texto}) {
     return <Text style={estilos.texto}>{texto}</Text>
}

const estilos = StyleSheet.create({
     texto: {
          fontSize: 14,
          lineHeight: 20,
          color: "#000000",
          fontWeight: "normal"
     },
});