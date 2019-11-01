import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
)

const style = StyleSheet.create({
  container: {
    marginTop:0,
    backgroundColor: "#296a9d",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 28,
    padding: 10,
    paddingTop: 25
  }
});

export default Header;
