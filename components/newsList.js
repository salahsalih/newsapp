import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import NewsItem from "./newsItem";
export default class NewsList extends Component {
  render() {
    const { news } = this.props;
    // const newsList = news.map((newsItemData, i) => (
    //   <NewsItem key={i} item={newsItemData} />
    //   ));

    return (
      // <ScrollView style={{ flex: 1, backgroundColor: "yellow" }}>{newsList}</ScrollView>
      <FlatList
        style={{ flex: 1 }}
        data={news}
        renderItem={props => <NewsItem item={props.item} />}
      />
    );
  }
}
