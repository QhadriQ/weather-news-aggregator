@echo off
echo Setting up Android environment...

echo.
echo 1. Setting environment variables...
setx ANDROID_HOME "C:\Users\%USERNAME%\AppData\Local\Android\Sdk"
setx JAVA_HOME "C:\Program Files\Android\Android Studio\jbr"

echo.
echo 2. Adding to PATH...
setx PATH "%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator;%ANDROID_HOME%\tools"

echo.
echo 3. Testing ADB...
adb version

echo.
echo 4. Listing available emulators...
emulator -list-avds

echo.
echo Setup complete! 
echo Please restart your terminal and run:
echo npx react-native run-android

pause