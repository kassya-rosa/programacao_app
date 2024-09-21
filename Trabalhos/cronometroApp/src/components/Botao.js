import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Botao({texto, onPress}) {
     const estilos = estilosFuncao(texto)

     return <Pressable style={estilos.botao} onPress={onPress}>
          <Text style={estilos.texto}>{texto}</Text>
     </Pressable>
}

const estilosFuncao = (texto) => StyleSheet.create({
     botao: {
          backgroundColor: texto === "Iniciar" 
          ? "#87ceea" 
          : texto === "Voltar" 
          ? "#3C3D37"
          : texto === "Parar"
          ? "#800000"
          : "#ffffff",
          paddingHorizontal: 18,
          paddingVertical: 8,
          borderRadius: 20,
     },
     texto: {
          fontSize: 16,
          fontWeight: "bold",
          color: texto === "Parar" ? "#ffffff" : "#000000"
     }
});