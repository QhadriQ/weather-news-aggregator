# Fix "No apps connected" Issue

## The Problem
Metro bundler is running but no Android device/emulator is connected.

## Solutions

### Option 1: Connect Android Device
1. Enable **Developer Options** on your Android phone
2. Enable **USB Debugging**
3. Connect phone via USB cable
4. Allow USB debugging when prompted

### Option 2: Start Android Emulator
1. Open **Android Studio**
2. Go to **Tools → AVD Manager**
3. Click **▶️ Play** button on any emulator
4. Wait for emulator to fully boot

### Option 3: Manual Device Check
```bash
# Add Android SDK to PATH first:
set PATH=%PATH%;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools
set PATH=%PATH%;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\emulator

# Then check devices:
adb devices
```

### Option 4: Run App After Device Connection
```bash
# Stop current Metro (Ctrl+C)
# Then restart with device connected:
npx react-native run-android
```

## Quick Fix
1. Connect Android device OR start emulator
2. Run: `npx react-native run-android`
3. Metro will automatically connect to the device