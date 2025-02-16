import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';
import TipsScreen from './screens/TipsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Secure Wi-Fi" }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ title: "Redes detectadas" }} />
        <Stack.Screen name="Tips" component={TipsScreen} options={{ title: "Consejos de Seguridad" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
