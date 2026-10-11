
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import PopularScreen from '../screens/PopularScreen';
import TrendingScreen from '../screens/TrendingScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#101827',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#101827',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />

      <Stack.Screen
        name="Popular"
        component={PopularScreen}
        options={{ title: 'Películas populares' }}
      />

      <Stack.Screen
        name="Trending"
        component={TrendingScreen}
        options={{ title: 'Tendencias' }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detalles' }}
      />
    </Stack.Navigator>
  );
}
