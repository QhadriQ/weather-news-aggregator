# Alternative: Run with Expo Go

Since Android SDK setup is complex, here's a simpler way to test the app:

## Install Expo CLI
```bash
npm install -g @expo/cli
```

## Convert to Expo Project
```bash
npx create-expo-app --template blank-typescript WeatherNewsExpo
cd WeatherNewsExpo
```

## Copy App Files
Copy these files from our project:
- `src/` folder (all TypeScript files)
- `App.tsx`
- API keys already configured

## Install Dependencies
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
npm install @react-native-async-storage/async-storage
```

## Run on Phone
```bash
npx expo start
```
- Scan QR code with Expo Go app on your phone
- App will run instantly without Android Studio

## Benefits
- ✅ No Android SDK setup needed
- ✅ Instant testing on real device
- ✅ Same React Native code
- ✅ All features work identically

This bypasses all the Android environment issues and gets the Weather News App running immediately!