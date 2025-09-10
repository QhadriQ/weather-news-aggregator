import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppProvider, useAppContext } from './src/context/AppContext';
import { HomeScreen } from './src/screens/HomeScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const AppContent: React.FC = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem('settings');
        if (savedSettings) {
          dispatch({ type: 'SET_SETTINGS', payload: JSON.parse(savedSettings) });
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };

    loadSettings();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4A90E2',
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Weather & News',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;