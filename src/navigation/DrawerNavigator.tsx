
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎬</Text>

      <Text style={styles.title}>Acerca de ExploraApp</Text>

      <Text style={styles.description}>
        ExploraApp es una aplicación para descubrir películas, conocer
        tendencias y consultar información de diferentes títulos.
      </Text>

      <Text style={styles.footer}>
        Proyecto académico de React Native.
      </Text>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#101827',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#1E293B',
          width: 280,
        },
        drawerActiveTintColor: '#F97316',
        drawerInactiveTintColor: '#CBD5E1',
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
        },
        drawerIcon: ({ color, size }) => {
          const iconName =
            route.name === 'Explorar'
              ? 'compass-outline'
              : 'information-circle-outline';

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
      <Drawer.Screen
        name="Explorar"
        component={TabNavigator}
        options={{ title: 'ExploraApp' }}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AboutScreen}
        options={{ title: 'Acerca de' }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  emoji: {
    fontSize: 75,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
  },
  description: {
    color: '#CBD5E1',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
  },
  footer: {
    color: '#FB923C',
    fontSize: 14,
    marginTop: 25,
    textAlign: 'center',
  },
});
