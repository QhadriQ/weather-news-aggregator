# Weather News Aggregator App

A React Native TypeScript app that displays weather information and filters news based on weather conditions.

## Features

- **Weather Information**: Current weather and 5-day forecast using OpenWeatherMap API
- **Weather-Based News Filtering**:
  - Cold weather (< 15°C): Shows depressing news
  - Hot weather (> 25°C): Shows fear-related news  
  - Cool weather (15-25°C): Shows positive/winning news
- **Settings**: Temperature unit selection and news category preferences
- **Responsive Design**: Works on different screen sizes

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **API Keys Setup**:
   - Get OpenWeatherMap API key from https://openweathermap.org/api
   - Get News API key from https://newsapi.org/
   - Update API keys in:
     - `src/services/weatherService.ts` (line 3)
     - `src/services/newsService.ts` (line 3)

3. **Android Setup**:
   ```bash
   npx react-native run-android
   ```

4. **iOS Setup**:
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

## Architecture

- **State Management**: React Context with useReducer
- **Navigation**: React Navigation bottom tabs
- **Services**: Separate services for weather and news APIs
- **Components**: Reusable WeatherCard and NewsCard components
- **TypeScript**: Full type safety throughout the app

## Weather-Based News Logic

The app categorizes weather into three conditions:
- **Cold** (< 15°C): Filters for keywords like "depression", "sad", "tragedy"
- **Hot** (> 25°C): Filters for keywords like "fear", "danger", "threat"  
- **Cool** (15-25°C): Filters for keywords like "win", "success", "happy"

## File Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React Context for state management
├── screens/        # Screen components
├── services/       # API service functions
└── types/          # TypeScript type definitions
```