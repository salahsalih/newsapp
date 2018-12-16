import React, { Component } from "react";
import { View, TextInput } from "react-native";

export default class SearchBar extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: ""
    };
  }
  search(text = "iraq") {
    this.setState({ value: text });
    this.props.searchFun(text);
    console.log(text);
  }
  render() {
    return (
      <View
        style={{
          flex: 0.1,
          marginHorizontal: 10,
          justifyContent: "center"
        }}
      >
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={this.search.bind(this)}
          value={this.state.value}
        />
      </View>
    );
  }
}
