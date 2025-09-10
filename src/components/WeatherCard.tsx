import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
  unit: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather, unit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>
        {weather.temperature}°{unit === 'celsius' ? 'C' : 'F'}
      </Text>
      <Text style={styles.condition}>{weather.condition}</Text>
      <Text style={styles.description}>{weather.description}</Text>
      <View style={styles.details}>
        <Text>Humidity: {weather.humidity}%</Text>
        <Text>Wind: {weather.windSpeed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A90E2',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  condition: {
    fontSize: 24,
    color: 'white',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textTransform: 'capitalize',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});