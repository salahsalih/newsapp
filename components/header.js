import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
        <Text style={styles.title}>News Application</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red"
  },
  image: { height: 40, width: 95 },
  title: { marginLeft: 20 }
});
