import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchB}>

        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Search"
        />
      </View>

      <Image style={styles.filterIcon} source={require('./assets/Filter.png')}/>
   
    </View>
  );
};
export default SearchBar;


const styles = StyleSheet.create({
  container: {
    margin: 18,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "70%",

  },
  searchB: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
  },

  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },

  filterIcon: {
    marginLeft: 27,
  }
});