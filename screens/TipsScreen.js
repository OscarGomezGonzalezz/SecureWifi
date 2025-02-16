import React from 'react';
import { View, Text } from 'react-native';

const TipsScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>🔹 Usa redes con cifrado WPA2 o WPA3.</Text>
      <Text>🔹 Evita redes públicas sin contraseña.</Text>
      <Text>🔹 Usa una VPN cuando estés en redes abiertas.</Text>
    </View>
  );
};

export default TipsScreen;
