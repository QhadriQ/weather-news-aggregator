import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, RefreshControl } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useAppContext } from '../context/AppContext';
import { WeatherCard } from '../components/WeatherCard';
import { NewsCard } from '../components/NewsCard';
import { fetchWeatherData, getWeatherCondition } from '../services/weatherService';
import { fetchNews, filterNewsByWeather } from '../services/newsService';

export const HomeScreen: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const loadData = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const unit = state.settings.temperatureUnit === 'celsius' ? 'metric' : 'imperial';
          
          const weather = await fetchWeatherData(latitude, longitude, unit);
          dispatch({ type: 'SET_WEATHER', payload: weather });
          
          const condition = getWeatherCondition(weather.temperature);
          const allNews = await fetchNews(state.settings.newsCategories);
          const filteredNews = filterNewsByWeather(allNews, condition);
          
          dispatch({ type: 'SET_NEWS', payload: filteredNews });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  useEffect(() => {
    loadData();
  }, [state.settings]);

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={state.loading} onRefresh={loadData} />
      }
    >
      {state.weather && (
        <WeatherCard 
          weather={state.weather} 
          unit={state.settings.temperatureUnit} 
        />
      )}
      
      <View style={styles.forecastContainer}>
        <Text style={styles.sectionTitle}>5-Day Forecast</Text>
        {state.weather?.forecast.map((day, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text>{day.date}</Text>
            <Text>{day.temperature}°</Text>
            <Text>{day.condition}</Text>
          </View>
        ))}
      </View>

      <View style={styles.newsContainer}>
        <Text style={styles.sectionTitle}>Weather-Based News</Text>
        {state.news.map((article, index) => (
          <NewsCard key={index} article={article} />
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
});