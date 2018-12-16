import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

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
        <TouchableOpacity onPress={() => this.props.openDrawer()}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bbbbbb",
    justifyContent: "space-between"
  },
  image: { height: 40, width: 95 },
  title: { marginLeft: 20 }
});
