
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const tendencias = [
  {
    id: '1',
    titulo: 'Aventuras espaciales',
    descripcion: 'Historias que te llevan más allá de las estrellas.',
    emoji: '🌌',
  },
  {
    id: '2',
    titulo: 'Mundos fantásticos',
    descripcion: 'Criaturas increíbles y universos imaginarios.',
    emoji: '🐉',
  },
  {
    id: '3',
    titulo: 'Misterio y suspenso',
    descripcion: 'Historias llenas de secretos y sorpresas.',
    emoji: '🕵️',
  },
];

export default function TrendingScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Tendencias</Text>

      <Text style={styles.subtitle}>
        Descubre los géneros que están llamando la atención.
      </Text>

      {tendencias.map((tendencia, index) => (
        <View key={tendencia.id} style={styles.card}>
          <Text style={styles.number}>0{index + 1}</Text>

          <Text style={styles.emoji}>{tendencia.emoji}</Text>

          <Text style={styles.cardTitle}>{tendencia.titulo}</Text>

          <Text style={styles.description}>
            {tendencia.descripcion}
          </Text>
        </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 22,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 22,
    borderRadius: 18,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F97316',
  },
  number: {
    color: '#FB923C',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 21,
  },
});
