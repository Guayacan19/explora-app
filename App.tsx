
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainDrawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detalles de la película',
            headerStyle: {
              backgroundColor: '#101827',
            },
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

