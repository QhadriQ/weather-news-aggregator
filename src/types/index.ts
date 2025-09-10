export interface WeatherData {
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  forecast: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  temperature: number;
  condition: string;
  description: string;
}

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
}

export interface UserSettings {
  temperatureUnit: 'celsius' | 'fahrenheit';
  newsCategories: string[];
}

export type WeatherCondition = 'cold' | 'hot' | 'cool';