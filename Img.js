import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Page</Text>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});
