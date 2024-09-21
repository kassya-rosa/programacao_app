import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Botao({onPress}) {
     return <Pressable style={estilos.botao}>
          <Text style={estilos.texto} onPress={onPress}>Gerar citação</Text>
     </Pressable>
}

const estilos = StyleSheet.create({
     botao: {
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 6,
          backgroundColor: "#4379F2",
          marginTop: 10
     },
     texto: {
          fontSize: 16,
          lineHeight: 20,
          color: "#ffffff",
     },
});