import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import Botao from "../../components/Botao";

export default function Cronometro() {
     const [ativo, setAtivo] = useState(false);
     const [milisegundos, setMilissegundos] = useState(0);

     useEffect(() => {
          let intervalo = null;
          if(ativo) {
               intervalo = setInterval(() => {
                    setMilissegundos((milisegundos) => milisegundos + 10);
               }, 10);
          } else if(!ativo && milisegundos !== 0) {
               clearInterval(intervalo); // Parar o meu intervalo
          }
          return () => clearInterval(intervalo);
     }, [ativo, milisegundos]);

     const resetar = () => {
          setAtivo(false);
          setMilissegundos(0);
     }

     const formatarCronometro = (tempo) => {
          const minutos = Math.floor(tempo / 60000);
          const segundos = Math.floor((tempo % 60000) / 1000);
          const milis = (tempo % 1000) / 10;
          
          return `${minutos < 60 ? `0${minutos}` : minutos} : ${segundos < 10 ? `0${segundos}` : segundos} . ${milis < 10 ? `0${milis}` : milis}`;
     }

     const iniciar = () => {
          setAtivo(!ativo);
     }

     return <View style={estilos.container}>
          <View style={estilos.topo}>
               <Text style={estilos.cronometro}>{formatarCronometro(milisegundos)}</Text>
          </View>
          <View style={estilos.rodape}>
               <Botao texto={"Resetar"} onPress={resetar}/>
               <Botao texto={ativo ? "Parar" : "Iniciar"} onPress={iniciar}/>
          </View>
     </View>
}

const estilos = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#000000",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 32
     },
     topo: {
          width: "100%",
          height: 500,
          justifyContent: "center"
     },
     cronometro: {
          color: "#ffffff",
          fontSize: 48,
          lineHeight: 64,
          textAlign: "center"
     },
     rodape: {
          flex: 1,
          paddingBottom: 32,
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          columnGap: 40
     }
});