import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity onPress={() => navigation.navigate('Show')}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather
                  name="trash"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
