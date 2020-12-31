import React, { useContext } from "react";
import {  StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {

  const { state } = useContext(Context); // get the list of blogs
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return <BlogPostForm/>;
}

const styles = StyleSheet.create({});
