
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DetailScreen({ route, navigation }: any) {
  const { titulo, genero, emoji } = route.params ?? {};

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji ?? '🎬'}</Text>

      <Text style={styles.title}>{titulo ?? 'Detalle de película'}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Género</Text>
        <Text style={styles.genre}>{genero ?? 'Sin información'}</Text>

        <Text style={styles.description}>
          Explora esta historia y descubre todo lo que hace especial a esta
          película.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101827',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 85,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#1E293B',
    borderRadius: 18,
    padding: 22,
    marginBottom: 24,
  },
  label: {
    color: '#FB923C',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genre: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    color: '#CBD5E1',
    fontSize: 15,
    lineHeight: 23,
  },
  button: {
    backgroundColor: '#F97316',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
