import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Botao({onPress}) {
     return <Pressable style={estilos.botao} onPress={onPress}>
          <Text style={estilos.texto}>Abrir Biscoito</Text>
     </Pressable>
}

const estilos = StyleSheet.create({
     botao: {
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 6,
          backgroundColor: "#D99559",
     },
     texto: {
          color: "#FFEAC5",
          fontSize: 16
     }
})