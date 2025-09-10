import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../context/AppContext';

const newsCategories = [
  'general', 'business', 'entertainment', 'health', 
  'science', 'sports', 'technology'
];

export const SettingsScreen: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const updateTemperatureUnit = async (unit: 'celsius' | 'fahrenheit') => {
    const newSettings = { ...state.settings, temperatureUnit: unit };
    dispatch({ type: 'SET_SETTINGS', payload: newSettings });
    await AsyncStorage.setItem('settings', JSON.stringify(newSettings));
  };

  const toggleCategory = async (category: string) => {
    const categories = state.settings.newsCategories.includes(category)
      ? state.settings.newsCategories.filter(c => c !== category)
      : [...state.settings.newsCategories, category];
    
    const newSettings = { ...state.settings, newsCategories: categories };
    dispatch({ type: 'SET_SETTINGS', payload: newSettings });
    await AsyncStorage.setItem('settings', JSON.stringify(newSettings));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Temperature Unit</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.button,
              state.settings.temperatureUnit === 'celsius' && styles.activeButton
            ]}
            onPress={() => updateTemperatureUnit('celsius')}
          >
            <Text style={[
              styles.buttonText,
              state.settings.temperatureUnit === 'celsius' && styles.activeButtonText
            ]}>
              Celsius
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              state.settings.temperatureUnit === 'fahrenheit' && styles.activeButton
            ]}
            onPress={() => updateTemperatureUnit('fahrenheit')}
          >
            <Text style={[
              styles.buttonText,
              state.settings.temperatureUnit === 'fahrenheit' && styles.activeButtonText
            ]}>
              Fahrenheit
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>News Categories</Text>
        {newsCategories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryItem,
              state.settings.newsCategories.includes(category) && styles.activeCategoryItem
            ]}
            onPress={() => toggleCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              state.settings.newsCategories.includes(category) && styles.activeCategoryText
            ]}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  buttonText: {
    color: '#666',
  },
  activeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryItem: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeCategoryItem: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  categoryText: {
    color: '#666',
  },
  activeCategoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
});