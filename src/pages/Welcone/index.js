import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
 } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation } from '@react-navigation/native'

export default function Index() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={ require('../assets/logo.png') }
        style={{width: "100%"}}
        resizeMode="contain"
        />
      </View>
      <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
        <Text style={styles.text}>Faça login para começar</Text>

        <TouchableOpacity style={styles.areaButton} onPress={()=>navigation.navigate("login")}>
          <Text style={styles.textButton}>Acessar</Text>
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
    containerLogo:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerForm:{
      flex: 1,
      backgroundColor: "white",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingHorizontal: "5%",

    },
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
    },
    text:{
      color: "#a1a1a1"
    },
    areaButton:{
      position: 'absolute',
      backgroundColor: "#38a69d",
      borderRadius: 50,
      paddingVertical: 8,
      width: "60%",
      alignSelf: 'center',
      bottom: "15%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton:{
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    }
})