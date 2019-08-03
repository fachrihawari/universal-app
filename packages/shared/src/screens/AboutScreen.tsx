import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { RouteComponentProps } from "react-router";


interface IProps extends RouteComponentProps {}

function AboutScreen(props: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>About Screen!</Text>
      <Button title="Back to Home" onPress={() => props.history.push("/")} />
    </View>
  );
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
});

export default AboutScreen;
