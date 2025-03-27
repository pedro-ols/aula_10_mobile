import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return(
    <View>
      <Link href="/sobre" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ir para tela sobre</Text>
      </Pressable>
      </Link>
      <Link href="/termos">Leia os Termos</Link>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20
  },
  button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
  }
});
