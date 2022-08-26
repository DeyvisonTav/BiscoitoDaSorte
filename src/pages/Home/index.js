import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Home() {
  const [img, setImg] = useState(require("../../assets/biscoito.png"));
  const [frase, setFrase] = useState("");
  const [clique, setClique] = useState("clique!");

  const frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  function breakcookie() {
    setImg(require("../../assets/biscoitoAberto.png"));
    let numeroAleatorio = parseInt(Math.random() * 7);
    const fraseAleatoria = ' "' + frases[numeroAleatorio] + '" ';
    setFrase(fraseAleatoria);
    setClique("");
  }

  return (
    <Animatable.View animation="fadeInUp" delay={500} style={styles.container}>
      <TouchableOpacity onPress={() => breakcookie()}>
        <Text style={styles.textTitle}>{clique}</Text>
        <View >
          <Image source={img} style={styles.image} />
        </View>
      </TouchableOpacity>
     
      <Text style={styles.textoFrase}>{frase}</Text>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 220,
    backgroundColor: '#dcd6d0'
  },
  textTitle: {
    paddingBottom: 15,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "#dd7b22",
  },
  image: {

    width: 350,
    height: 330,
  },
  textoFrase: {
    paddingTop: 70,
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: "italic",
    textAlign: "center",
  },
});
