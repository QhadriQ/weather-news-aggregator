import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const WeatherNewsApp = () => {
  const [activeTab, setActiveTab] = useState('home');

  const HomeTab = () => (
    <ScrollView style={styles.container}>
      <View style={styles.weatherCard}>
        <Text style={styles.temperature}>22°C</Text>
        <Text style={styles.condition}>Sunny</Text>
        <Text style={styles.description}>Clear sky</Text>
        <View style={styles.details}>
          <Text>Humidity: 65%</Text>
          <Text>Wind: 5 m/s</Text>
        </View>
      </View>
      
      <View style={styles.forecastContainer}>
        <Text style={styles.sectionTitle}>5-Day Forecast</Text>
        {[1,2,3,4,5].map(day => (
          <View key={day} style={styles.forecastItem}>
            <Text>Day {day}</Text>
            <Text>2{day}°</Text>
            <Text>Sunny</Text>
          </View>
        ))}
      </View>

      <View style={styles.newsContainer}>
        <Text style={styles.sectionTitle}>Weather-Based News</Text>
        {['Success Story: Local Team Wins Championship', 'Happy News: Community Celebration', 'Achievement: New Record Set'].map((title, index) => (
          <View key={index} style={styles.newsCard}>
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.newsDescription}>Cool weather brings positive news...</Text>
            <Text style={styles.newsSource}>News Source • Today</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const SettingsTab = () => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Temperature Unit</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, styles.activeButton]}>
            <Text style={[styles.buttonText, styles.activeButtonText]}>Celsius</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fahrenheit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>News Categories</Text>
        {['General', 'Business', 'Technology', 'Sports'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather News App</Text>
      </View>
      
      {activeTab === 'home' ? <HomeTab /> : <SettingsTab />}
      
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'home' && styles.activeTab]}
          onPress={() => setActiveTab('home')}
        >
          <Text style={[styles.tabText, activeTab === 'home' && styles.activeTabText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'settings' && styles.activeTab]}
          onPress={() => setActiveTab('settings')}
        >
          <Text style={[styles.tabText, activeTab === 'settings' && styles.activeTabText]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  weatherCard: {
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
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  forecastContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  newsContainer: {
    marginBottom: 20,
  },
  newsCard: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  newsSource: {
    fontSize: 12,
    color: '#4A90E2',
  },
  section: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
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
  categoryText: {
    color: '#666',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#f0f8ff',
  },
  tabText: {
    color: '#999',
  },
  activeTabText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});

export default WeatherNewsApp;