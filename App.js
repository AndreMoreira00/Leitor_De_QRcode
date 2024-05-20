import React, {useState, useEffect} from 'react';
import { Text, StatusBar, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./AppStyle";

export default function App() {

  const [escaneado, estadoEscaneado]= useState(false)

  async function ObterPermissao(){
    await BarCodeScanner.requestPermissionsAsync()
  }

  useEffect(function(){
    ObterPermissao()
  }, [])

  function Escanear({type, data}){
    estadoEscaneado(true)
    alert(data)
  }
  
  return (
    <LinearGradient style={styles.tela} colors={["#232526", "#414345"]}>
      <StatusBar 
      translucent
      barStyle={"light-content"}
      backgroundColor={"transparent"}/>

      {escaneado ?
        <Pressable onPress={function(){estadoEscaneado(false)}}>
          <Text style={styles.texto}>Escanear novamente</Text>
        </Pressable>
        :
        <BarCodeScanner style={styles.camera} onBarCodeScanned={Escanear}/>
      }
    </LinearGradient>
  );
}