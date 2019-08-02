# Universal App

This is a boilerplace for developing app for android, ios, web and desktop.

## Tech stack

- Lerna
- Typescript
- React
- React Native
- React Native Web
- Electron

## How to use

- Install lerna

  ```bash
  yarn global add lerna
  ```

  or

  ```bash
  npm install -g lerna
  ```

- Clone project

  ```bash
  git clone https://github.com/fachrihawari/universal-app
  ```

- Enter directory project

  ```bash
  cd universal-app
  ```

- Install depedencies

  ```bash
  lerna bootstrap
  ```

- ANDROID only, copy your debug.keystore to android/app/debug.keystore

- IOS only, install pod depedencies

  ```bash
  cd ios && pod install
  ```

- Run packager

  ```bash
  lerna run start
  ```

- Run the app
    - Android
    ```bash
    react-native run-android
    ```
    - iOS
    ```bash
    react-native run-ios
    ```
   - Web and Desktop
   ``` 
   Already running with packager
   ```