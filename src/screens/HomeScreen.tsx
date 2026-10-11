
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emoji}>🎬</Text>

      <Text style={styles.title}>ExploraApp</Text>

      <Text style={styles.subtitle}>
        Descubre películas y encuentra tu próxima historia favorita.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🍿 ¡Bienvenido!</Text>
        <Text style={styles.description}>
          Explora películas populares, descubre tendencias y consulta los
          detalles de cada título.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Popular')}
      >
        <Text style={styles.buttonText}>Explorar películas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Trending')}
      >
        <Text style={styles.secondaryButtonText}>Ver tendencias</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#101827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  card: {
    width: '100%',
    backgroundColor: '#1E293B',
    padding: 22,
    borderRadius: 18,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: 12,
  },
  description: {
    color: '#E2E8F0',
    fontSize: 15,
    lineHeight: 23,
  },
  button: {
    width: '100%',
    backgroundColor: '#F97316',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#F97316',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FDBA74',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
