# Android Studio Setup Guide

## Prerequisites
1. **Install Android Studio**: Download from https://developer.android.com/studio
2. **Install Java JDK 11**: Required for React Native
3. **Install Node.js**: Version 16 or higher

## Setup Steps

### 1. Open Project in Android Studio
```bash
# Navigate to project directory
cd "q:\java job\task1"

# Open Android Studio and select "Open an existing project"
# Navigate to: q:\java job\task1\android
```

### 2. Configure Android SDK
1. Open Android Studio
2. Go to **File → Settings → Appearance & Behavior → System Settings → Android SDK**
3. Install:
   - Android SDK Platform 33
   - Android SDK Build-Tools 33.0.0
   - Android SDK Platform-Tools

### 3. Set Environment Variables
Add to your system PATH:
```
ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
```

### 4. Install Dependencies
```bash
cd "q:\java job\task1"
npm install
```

### 5. Start Metro Bundler
```bash
npx react-native start
```

### 6. Run on Android Device/Emulator
```bash
# Make sure Android device is connected or emulator is running
npx react-native run-android
```

## Android Studio Project Structure
```
android/
├── app/
│   ├── build.gradle          # App-level build configuration
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── java/com/weathernewsapp/
│       │   ├── MainActivity.java
│       │   └── MainApplication.java
│       └── res/values/
│           ├── strings.xml
│           └── styles.xml
├── build.gradle             # Project-level build configuration
├── settings.gradle          # Project settings
└── gradle.properties       # Gradle properties
```

## Troubleshooting

### Common Issues:
1. **Gradle sync failed**: Clean and rebuild project
2. **Metro bundler issues**: Run `npx react-native start --reset-cache`
3. **Device not detected**: Enable USB debugging on Android device

### Clean Build:
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

## Ready for Development! 🚀
Your React Native app is now connected to Android Studio and ready for development and debugging.