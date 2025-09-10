import { WeatherData, WeatherCondition } from '../types';

const API_KEY = 'YOUR_OPENWEATHER_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (lat: number, lon: number, unit: string): Promise<WeatherData> => {
  const currentResponse = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
  );
  const forecastResponse = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
  );

  const currentData = await currentResponse.json();
  const forecastData = await forecastResponse.json();

  return {
    temperature: Math.round(currentData.main.temp),
    condition: currentData.weather[0].main,
    description: currentData.weather[0].description,
    humidity: currentData.main.humidity,
    windSpeed: currentData.wind.speed,
    forecast: forecastData.list.slice(0, 5).map((item: any) => ({
      date: new Date(item.dt * 1000).toLocaleDateString(),
      temperature: Math.round(item.main.temp),
      condition: item.weather[0].main,
      description: item.weather[0].description,
    })),
  };
};

export const getWeatherCondition = (temperature: number): WeatherCondition => {
  if (temperature < 15) return 'cold';
  if (temperature > 25) return 'hot';
  return 'cool';
};