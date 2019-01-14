import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Img from "./Img";

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

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: Home,
  Dashboard: Dashboard,
  Img: Img
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppContainer = createAppContainer(AppDrawerNavigator);
