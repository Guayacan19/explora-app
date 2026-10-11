
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import StackNavigator from './StackNavigator';
import PopularScreen from '../screens/PopularScreen';
import TrendingScreen from '../screens/TrendingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#F97316',
        tabBarInactiveTintColor: '#94A3B8',

        tabBarStyle: {
          backgroundColor: '#1E293B',
          borderTopColor: '#334155',
          height: 55 + insets.bottom,
          paddingBottom: insets.bottom + 5,
          paddingTop: 5,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Inicio') {
            iconName = 'home-outline';
          } else if (route.name === 'Populares') {
            iconName = 'film-outline';
          } else {
            iconName = 'trending-up-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={StackNavigator}
      />

      <Tab.Screen
        name="Populares"
        component={PopularScreen}
      />

      <Tab.Screen
        name="Tendencias"
        component={TrendingScreen}
      />
    </Tab.Navigator>
  );
}
