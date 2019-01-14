import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
const Nav = createStackNavigator({
  Home: { screen: Home },
  Post: { screen: Post }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppContainer = createAppContainer(Nav);
