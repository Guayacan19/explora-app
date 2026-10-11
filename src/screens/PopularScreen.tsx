
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const peliculas = [
  { id: '1', titulo: 'Interestelar', genero: 'Ciencia ficción', emoji: '🚀' },
  { id: '2', titulo: 'El rey león', genero: 'Animación', emoji: '🦁' },
  { id: '3', titulo: 'Jurassic Park', genero: 'Aventura', emoji: '🦖' },
];

export default function PopularScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Películas populares</Text>
      <Text style={styles.subtitle}>
        Explora algunas películas que no te puedes perder.
      </Text>

      {peliculas.map((pelicula) => (
        <TouchableOpacity
          key={pelicula.id}
          style={styles.card}
   onPress={() =>
  navigation.navigate('Detail', {
    titulo: pelicula.titulo,
    genero: pelicula.genero,
    emoji: pelicula.emoji,
  })
}
        >
          <Text style={styles.emoji}>{pelicula.emoji}</Text>

          <View style={styles.info}>
            <Text style={styles.movieTitle}>{pelicula.titulo}</Text>
            <Text style={styles.genre}>{pelicula.genero}</Text>
            <Text style={styles.link}>Ver detalles →</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101827',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#CBD5E1',
    marginBottom: 22,
    lineHeight: 22,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
  },
  emoji: {
    fontSize: 42,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  genre: {
    fontSize: 14,
    color: '#CBD5E1',
    marginBottom: 8,
  },
  link: {
    color: '#FB923C',
    fontWeight: 'bold',
  },
});
