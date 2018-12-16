import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import Drawer from "react-native-drawer";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import NewsList from "../components/newsList";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    this.search("iraq");
  }

  search(q) {
    fetch(
      `https://newsapi.org/v2/everything?q=${q}&apiKey=978d6c3818ff431b8c210ae86550fb1f`
    )
      .then(res => res.json())
      .then(news => {
        this.setState({ news: news.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateParent(data) {
    this.setState(data);
  }

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  render() {
    return (
      <Drawer
        type="overlay"
        side="right"
        open={true}
        openDrawerOffset={100}
        ref={ref => (this._drawer = ref)}
        content={
          <View style={{ backgroundColor: "red", flex: 1 }}>
            <Text>Hello from the other side of knowledge</Text>
          </View>
        }
      >
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
          <Header />
          <TouchableOpacity onPress={() => this.openControlPanel()}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <SearchBar searchFun={this.search.bind(this)} />
          <NewsList news={this.state.news} />
        </View>
      </Drawer>
    );
  }
}
