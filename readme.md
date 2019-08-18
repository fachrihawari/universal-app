# Universal App

This is a boilerplace for developing app for android, ios, web and desktop.

## Tech stack

- Typescript
- React
- React Native
- React Native Web
- Electron

## How to use

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
  yarn bootstrap
  ```

- ANDROID only, copy your debug.keystore to android/app/debug.keystore

- IOS only, install pod depedencies

  ```bash
  cd ios && pod install
  ```

- Run the app
    - Android
    ```bash
    cd packages/mobile
    react-native run-android
    ```
    - iOS
    ```bash
    cd packages/mobile
    react-native run-ios
    ```
   - Web
    ```bash
    yarn run-web
    ```
   - Desktop
    ```bash
    yarn run-desktop
    ```
