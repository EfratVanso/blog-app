import React, { useContext } from "react";
import {  StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {

  const { state } = useContext(Context); // get the list of blogs
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return <BlogPostForm
  initialValues = {{title: blogPost.title, content: blogPost.content}}
  onSubmit={(title, content) => {
    addBlogPost(title, content, () => navigation.navigate("Index"));
  }}/>;
}
BlogPostForm.defaultProps = { //for case that CreateScreen uses this component and it doesn't send initialValues
    initialValues:{
        title:'',
        content:''
    }
}
const styles = StyleSheet.create({});
