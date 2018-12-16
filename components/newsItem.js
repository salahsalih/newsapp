import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default class NewsItem extends Component {
  render() {
    let { item } = this.props;
    const { description, publishedAt, title, urlToImage } = item;
    console.log("Props",this.props)
    return (
      <View style={styles.itemNewsContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: urlToImage }}
        />
        <View>
          <Text style={{fontSize:20}}>{title}</Text>
          <Text style={{fontSize:16}}>{description}</Text>
          <Text style={{color:"white",fontSize:12,fontWeight:"900"}}>{publishedAt}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemNewsContainer: {
    flex:1,
    // height: 60,
    flexDirection: "row",
    // alignItems: "center",
    backgroundColor: "gray",
    margin:5
  },
  image: { height: 40, width: 95 },
  title: {  }
});
