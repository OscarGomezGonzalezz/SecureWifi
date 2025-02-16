// components/WiFiScanner.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, PermissionsAndroid, Platform } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import NetInfo from "@react-native-community/netinfo";

const WiFiScanner = () => {
  const [wifiInfo, setWifiInfo] = useState(null);

  // Solicitar permisos en Android
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  // Obtener la red Wi-Fi actual
  const getWifiInfo = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) {
      Alert.alert("Permiso denegado", "No podemos escanear redes sin permisos de ubicación.");
      return;
    }

    NetInfo.fetch().then(async (state) => {
      if (state.type === "wifi") {
        try {
          const ssid = await WifiManager.getCurrentWifiSSID();
          setWifiInfo({ ssid });
        } catch (error) {
          console.log("No se pudo obtener el SSID", error);
          setWifiInfo(null);
        }
      } else {
        Alert.alert("No conectado a Wi-Fi", "Conéctate a una red Wi-Fi para analizarla.");
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Escanear Wi-Fi actual" onPress={getWifiInfo} />
      {wifiInfo ? <Text>Conectado a: {wifiInfo.ssid}</Text> : <Text>No hay Wi-Fi detectado.</Text>}
    </View>
  );
};

export default WiFiScanner;
