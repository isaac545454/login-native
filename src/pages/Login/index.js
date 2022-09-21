import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";
export default function Index() {
  return (
    <View style={styles.container}>
      <Animatable.View 
      animation="fadeInLeft" 
      delay={500} 
      style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View 
      animation="fadeInUp" 
      style={styles.containerForm}
      >
        <Text style={styles.title}>Email:</Text>
        <TextInput 
        placeholder="digite seu email..."
        style={styles.input}
        />

        <Text style={styles.title}>Senha:</Text>
        <TextInput 
        placeholder="digite sua senha..."
        style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            acessar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>

      </Animatable.View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#38a69d",
    },
    containerHeader:{
      marginTop: "14%",
      marginBottom: "8%",
      paddingStart: '5%',
    },
    message:{
      fontSize: 28,
      fontWeight: 'bold',
      color: "white"
    },
    containerForm:{
      backgroundColor: "#fff",
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: '5%',
    },
    title:{
      fontSize: 20,
      marginTop: 28,
    },
    input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button:{
      backgroundColor: "#38a69d",
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',

    },
    textButton:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonRegister: {
     marginTop: 15,
     alignSelf: 'center',
    },
    textButtonRegister:{
      color: "#a1a1a1"
    }
})