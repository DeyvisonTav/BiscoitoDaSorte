import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={200}
          animation="flipInX"
          source={require('../../assets/biscoito.png')}
          style={{ width: '70%', height: '60%' , shadowColor: 'black', shadowOffset:100 }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={700}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
           Receba sua frase do dia!
        </Text>
        <Text style={styles.text}> Aperte para começar</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcd6d0'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#dcd6d0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    
   borderColor: '#72441d',
    borderTopWidth: 2,
    borderRightWidth: 1.6,
    borderLeftWidth: 1.6,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#72441d'
  },
  text: {
    color: '#72441d'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#72441d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})