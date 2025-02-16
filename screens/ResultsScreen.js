import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

const ResultsScreen = () => {
  const [wifiList, setWifiList] = useState([]);

  const scanNetworks = async () => {
    try {
      const networks = await WifiManager.loadWifiList();
      setWifiList(networks);
    } catch (error) {
      console.log("Error al escanear redes:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Escanear redes" onPress={scanNetworks} />
      {wifiList.map((net, index) => (
        <Text key={index}>{net.SSID} - {net.capabilities}</Text>
      ))}
    </View>
  );
};

export default ResultsScreen;
