import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Press Cmd+R to reload browser,\n" + "Cmd+Shift+C for dev menu"
});

interface Props {}
export default class App extends Component<Props> {
  state = {
    animation: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  get fadeInStyle(): any {
    return {
      opacity: this.state.animation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Animated.Text style={[styles.instructions, this.fadeInStyle]}>
          To get started, edit packages/shared/src/index.tsx
        </Animated.Text>
        <Animated.Text style={[styles.instructions, this.fadeInStyle]}>
          {instructions}
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    opacity: 0
  }
});
