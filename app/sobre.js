import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a tela Sobre!</Text>
      <Link href="/sobre">Ir para Tela inicial</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});