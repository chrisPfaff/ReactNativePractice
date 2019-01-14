import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#FFFFCD",
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "center",
    padding: 100
  },
  img: {
    width: 300,
    height: 200,
    blurRadius: 1,
    top: 100
  },
  text: {
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.55)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Great Lakes</Text>
        <View>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzMS82OTgvb3JpZ2luYWwvR3JlYXQtTGFrZXMtY3VycmVudC1tYXAuSlBH"
            }}
          />
        </View>
      </View>
    );
  }
}
