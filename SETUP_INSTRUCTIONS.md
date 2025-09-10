# Weather News Aggregator - Setup Instructions

## Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

## API Keys Required

### 1. OpenWeatherMap API
- Visit: https://openweathermap.org/api
- Sign up for free account
- Get your API key
- Replace `YOUR_OPENWEATHER_API_KEY` in `src/services/weatherService.ts`

### 2. News API
- Visit: https://newsapi.org/
- Sign up for free account  
- Get your API key
- Replace `YOUR_NEWS_API_KEY` in `src/services/newsService.ts`

## Installation Steps

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **For Android**:
   ```bash
   npx react-native run-android
   ```

3. **For iOS** (macOS only):
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

## App Features Implemented

✅ **Weather Information**
- Current weather based on user location
- 5-day forecast display
- Temperature, humidity, wind speed

✅ **News Headlines**
- Latest news from NewsAPI
- Clickable articles that open in browser
- Source and publication date display

✅ **Weather-Based News Filtering**
- Cold weather (< 15°C): Depressing news keywords
- Hot weather (> 25°C): Fear-related news keywords
- Cool weather (15-25°C): Positive/winning news keywords

✅ **Settings Screen**
- Temperature unit selection (Celsius/Fahrenheit)
- News category preferences
- Persistent settings storage

✅ **Technical Requirements**
- React Native with TypeScript
- Context API for state management
- Responsive design for different screen sizes
- Location permissions for weather data

## Screenshots Location
Screenshots of the app UI should be taken after running the app and shared with admin@i2global.in

## GitHub Repository
This code is ready to be pushed to GitHub and shared with the admin.