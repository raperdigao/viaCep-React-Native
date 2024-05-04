import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Viaceplogo from './assets/viaCepLogo.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      

      <StatusBar style="auto" />
      <Image
      // Estilizar a imagem inline
      style={{position: 'absolute', top: 40, borderRadius: 10, flex: 1}}
      source={Viaceplogo}
      />

      <View
      // criar a classe containerInfos
      style={styles.containerInfos}
      >

    <Text>
      Nome:
    </Text>

    <TextInput
    placeholder='Informe o seu nome'
    style={styles.inputStyle}
    />
    <Text>
      Cep:
    </Text>

    <TextInput
    placeholder='Informe o seu cep'
    style={styles.inputStyle}
    keyboardType='numeric'
    />
    <Text>
      Endereço:
    </Text>

    <TextInput
    placeholder='Informe o seu endereço'
    style={styles.inputStyle}
    />
    <Text>
      Número:
    </Text>

    <TextInput
    placeholder='Informe o seu número'
    style={styles.inputStyle}
    keyboardType='numeric'
    />


<Text>
      Bairro:
    </Text>

    <TextInput
    placeholder='Informe o seu bairro'
    style={styles.inputStyle}
   
    />


    <Text>
      Cidade:
    </Text>

    <TextInput
    placeholder='Informe a sua cidade'
    style={styles.inputStyle}
    />

<Text>
      UF:
    </Text>

    <TextInput
    placeholder='Informe a sua UF'
    style={styles.inputStyle}
   
    />



   
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerInfos: {
    flex: 1,
    borderWidth: 8, 
    width: '80%',
    height: "60%",
    marginTop: 250,
  },
  
  inputStyle: {

  }
});
