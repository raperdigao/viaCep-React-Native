import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Viaceplogo from './assets/viaCepLogo.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      

      <StatusBar style="auto" />
      <Image
      // Estilizar a imagem inline
      style={{position: 'absolute', top: 40, borderRadius: 10}}
      source={Viaceplogo}
      />

      <View
      // criar a classe containerInfos
      style={styles.containerInfos}
      >

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

  }
});
