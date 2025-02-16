import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a Secure Wi-Fi</Text>
      <Button title="Escanear Wi-Fi" onPress={() => navigation.navigate('Results')} />
      <Button title="Consejos de seguridad" onPress={() => navigation.navigate('Tips')} />
    </View>
  );
};

export default HomeScreen;


