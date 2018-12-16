import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
export default class NewsItem extends Component {
  openArticle(url) {
    Linking.openURL(url).catch(err => console.error("An error occurred", err));
  }

  render() {
    let { item } = this.props;
    const { description, publishedAt, title, urlToImage, url } = item;
    return (
      <TouchableOpacity
        onPress={() => this.openArticle(url)}
        style={styles.itemNewsContainer}
      >
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: urlToImage }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <Text style={{ fontSize: 12, padding: 5 }}>{description}</Text>
          <Text style={{ color: "#888888", fontSize: 12, fontWeight: "900" }}>
            {publishedAt}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemNewsContainer: {
    flex: 1,
    // height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    margin: 5
  },
  image: { height: 40, width: 95 },
  title: {}
});
