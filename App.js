import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from "react-native";
import { StatusBar as AutoStatusBar } from "expo-status-bar";
import data from "./assets/docs.json";
import * as WebBrowser from "expo-web-browser";
import { Entypo } from "@expo/vector-icons";

const Item = ({ item }) => (
  <Pressable
    style={styles.item}
    onPress={() => _handlePressButtonAsync(item.Link)}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Entypo
        name="circle"
        size={32}
        style={{ paddingLeft: 5 }}
        color={
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
          // '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
        }
      />
      <Text style={styles.title}>{item.Name}</Text>
    </View>
  </Pressable>
);

const _handlePressButtonAsync = async (link) => {
  let result = await WebBrowser.openBrowserAsync(link);
  // setResult(result);
};
const App = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.tech}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <AutoStatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#344FA1",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#041754",
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 26,
    borderRadius: 24,
    marginVertical: 4,
    marginHorizontal: 24,
  },
  title: {
    justifyContent: "center",
    fontSize: 24,
    color: "#f3f3f3",
    paddingLeft: 18,
  },
});

export default App;
