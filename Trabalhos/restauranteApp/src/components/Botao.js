import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Botao({onPress, texto}) {
     const estilos = estilosFuncao(texto);

     return <Pressable style={estilos.botao} onPress={onPress}>
          <Text style={estilos.texto}>{texto}</Text>
     </Pressable>
}

const estilosFuncao = (texto) => StyleSheet.create({
     botao: {
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 6,
          backgroundColor: texto === "Registrar entrada" ? "#1E201E" : "#ECDFCC",
          elevation: 4
     },
     texto: {
          color: texto === "Registrar entrada" ? "#FFEAC5" : "#000000",
          fontSize: 16
     }
});