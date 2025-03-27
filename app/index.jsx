import { View, Text, StyleSheet, Button } from "react-native";
import { Link, Stack, useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();

  const hideHeader = () => {
    navigation.setOptions({
      headerShown: false,
    });
  }
  const showHeader = () => {
    navigation.setOptions({
      headerShown: true,
    });
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        title: 'SENAI', 
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'red',
        }}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bem-vindo à tela inicial!</Text>
      </View>
      
      <Link href="/sobre">Ir para Sobre</Link>
      <Button title="Ocultar header" onPress={hideHeader}/>
      <Button title="Mostrar header" onPress={showHeader}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 1600,
    height: 300,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 8,
    marginTop: 100,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: 'white',
    
  },
});
