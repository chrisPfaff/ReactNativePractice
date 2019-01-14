import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
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

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  { Home: Home, Dashboard: Dashboard },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#39BBD7"
      }
    }
  }
);

const Nav = createStackNavigator(
  { Home: { screen: Home } },
  {
    defaultNavigationOptions: {
      title: "Chris' React Native App",
      headerStyle: {
        backgroundColor: "#39BBD7"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppContainer = createAppContainer(AppDrawerNavigator);
