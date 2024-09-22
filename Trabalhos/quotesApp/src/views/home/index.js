import React, {useState} from "react";
import { Text, Image, StyleSheet, View } from "react-native";

import Texto from "../../components/Texto";
import Botao from "../../components/Botao";

import Imagem from "../../../assets/semImagem.png";
import jsonCitacoes from "../../mocks/citacoes";

export default function Quote() {
     const [imagem, setImagem] = useState(Imagem);
     const [autor, setAutor] = useState("Autor");
     const [frase, setFrase] = useState("Frase");

     const selecionarFrase = () => {
          // console.log(jsonCitacoes);
          const indiceAleatorio = [Math.floor(Math.random() * jsonCitacoes.length)];
          // console.log("Indice: ", indiceAleatorio);
          return jsonCitacoes[indiceAleatorio];
     }

     const pegarFrase = (citacao) => {
          // console.log("Citacao", citacao);
          // console.log("Autor: ", citacao.autor);

          setAutor(citacao.autor);
          setImagem(citacao.imagem);
          setFrase(citacao.frase);
     }

     return <View style={estilos.org}>
          <Text style={estilos.logo}>Quotes App</Text>
          <Image source={imagem} style={estilos.imagem}/>
          <View style={estilos.conteudo}>
               <Text style={estilos.titulo}>{autor}</Text>
               <Texto texto={frase}/>
          </View>

          {/* Passar a função como callback */}
          <Botao onPress={() => pegarFrase(selecionarFrase())}/> 
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