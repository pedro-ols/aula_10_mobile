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
        headerRight: () => (
          <Button onPress={() => alert("Olá aluno de DS")} title="info" color="red"/>
        ),
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
    width: 414,
    height: 200,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  },
});
