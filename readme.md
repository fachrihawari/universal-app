# Universal App

This is a boilerplace for developing app for android, ios, and web.

## Tech stack

- Lerna
- Typescript
- React
- React Native
- React Native Web

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
  ```bash
  react-native run-android
  ```
  or
  ```bash
  react-native run-ios
  ```
