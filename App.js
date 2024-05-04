import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Viaceplogo from './assets/viaCepLogo.jpg'
import { useEffect, useState } from 'react';
import { api } from './axios';

export default function App() {
// Aqui pode criar scripts



const [cepInformado, setCepInformado] = useState("");
const [logradouro, setLogradouro] = useState("");
const [bairro, setBairro] = useState("");
const [cidade, setCidade] = useState("");
const [uf, setUf] = useState("");

async function cepDigitado() {
  try {
    const response = await api.get(`${cepInformado}/json`);

    setLogradouro(response.data.logradouro)
    setBairro(response.data.bairro)
    setCidade(response.data.localidade)
    setUf(response.data.uf)
  } catch (error) {
    console.log(error);
  }
}


useEffect(() => {
  cepDigitado();

}, [cepInformado])



  //variável recebendo a url da API
  


  return (
    // Aqui somente HTMl e CSS
    <View style={styles.container}>


      <StatusBar style="auto" />
      <Image
        // Estilizar a imagem inline
        style={{ position: 'absolute', top: 40, borderRadius: 10, flex: 1 }}
        source={Viaceplogo}
      />

      <View
        // criar a classe containerInfos
        style={styles.containerInfos}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textStyles}>
            Nome:
          </Text>

          <TextInput
            placeholder='Informe o seu nome'
            style={styles.inputStyle}
           
          />
          <Text style={styles.textStyles}>
            Cep:
          </Text>

          <TextInput
            placeholder='Informe o seu cep'
            style={styles.inputStyle}
            keyboardType='numeric'
            onChangeText={(txt) => setCepInformado(txt)}
          />
          <Text style={styles.textStyles}>
            Endereço:
          </Text>

          <TextInput
            placeholder='Informe o seu endereço'
            style={styles.inputStyle}
            value={logradouro}
          />
          <Text style={styles.textStyles}>
            Número:
          </Text>

          <TextInput
            placeholder='Informe o seu número'
            style={styles.inputStyle}
            keyboardType='numeric'
          />


          <Text style={styles.textStyles}>
            Bairro:
          </Text>

          <TextInput
            placeholder='Informe o seu bairro'
            style={styles.inputStyle}
            value={bairro}

          />


          <Text style={styles.textStyles}>
            Cidade:
          </Text>

          <TextInput
            placeholder='Informe a sua cidade'
            style={styles.inputStyle}
            value={cidade}
          />

          <Text style={styles.textStyles} t>
            UF:
          </Text>

          <TextInput
            placeholder='Informe a sua UF'
            style={styles.inputStyle}
            value={uf}

          />


        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerInfos: {
    flex: 1,
    
    borderRadius: 10,
    borderColor: 'yellow',
    width: '90%',
    height: "60%",
    marginTop: 250,
  },

  inputStyle: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: '#6c9c5e',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    fontWeight: '800',
  },
  textStyles: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  }
});

