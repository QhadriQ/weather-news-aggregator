# Android Studio Fix - Complete Setup

## Issue: Missing Android SDK Configuration

## Step-by-Step Fix

### 1. Install Android Studio Properly
- Download: https://developer.android.com/studio
- Install with **Android SDK** included

### 2. Set Environment Variables
```bash
# Add to Windows System Environment Variables:
ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
JAVA_HOME=C:\Program Files\Android\Android Studio\jbr
```

### 3. Add to System PATH
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%JAVA_HOME%\bin
```

### 4. Create Android Emulator
1. Open Android Studio
2. **Tools → AVD Manager**
3. **Create Virtual Device**
4. Choose **Pixel 4** 
5. Download **API 33** system image
6. **Finish** setup

### 5. Start Emulator First
```bash
# In Android Studio, start emulator
# OR command line:
emulator -avd Pixel_4_API_33
```

### 6. Then Run App
```bash
cd "q:\java job\task1"
npx react-native run-android
```

## Alternative: Use Physical Device
1. Enable **Developer Options** on Android phone
2. Enable **USB Debugging**
3. Connect via USB
4. Run: `npx react-native run-android`

## Quick Test
```bash
adb devices
# Should show connected device/emulator
```

The app will work once Android environment is properly configured!