import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { WeatherData, NewsArticle, UserSettings } from '../types';

interface AppState {
  weather: WeatherData | null;
  news: NewsArticle[];
  settings: UserSettings;
  loading: boolean;
}

type AppAction = 
  | { type: 'SET_WEATHER'; payload: WeatherData }
  | { type: 'SET_NEWS'; payload: NewsArticle[] }
  | { type: 'SET_SETTINGS'; payload: UserSettings }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AppState = {
  weather: null,
  news: [],
  settings: {
    temperatureUnit: 'celsius',
    newsCategories: ['general']
  },
  loading: false
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_WEATHER':
      return { ...state, weather: action.payload };
    case 'SET_NEWS':
      return { ...state, news: action.payload };
    case 'SET_SETTINGS':
      return { ...state, settings: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};