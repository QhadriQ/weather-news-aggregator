# Android SDK Setup Required

## Issue: Missing Android SDK Tools
The error shows `adb` and `emulator` commands not found, meaning Android SDK is not properly configured.

## Quick Setup Steps

### 1. Install Android Studio
- Download: https://developer.android.com/studio
- Install with default settings

### 2. Set Environment Variables
Add to Windows System PATH:
```
C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools
C:\Users\%USERNAME%\AppData\Local\Android\Sdk\emulator
```

### 3. Create Android Emulator
1. Open Android Studio
2. Tools → AVD Manager
3. Create Virtual Device
4. Choose any phone (e.g., Pixel 4)
5. Download system image (API 33)
6. Finish setup

### 4. Alternative: Use Physical Device
1. Enable Developer Options on Android phone
2. Enable USB Debugging
3. Connect via USB
4. Allow debugging when prompted

### 5. Run App
```bash
# Start emulator OR connect device first
npx react-native run-android
```

## Environment Check
```bash
# Test if SDK is properly configured:
adb devices
emulator -list-avds
```

The app code is ready - just need Android SDK configured!