import React, { useContext } from "react";
import {  StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {

    const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context); // get the list of blogs
  const blogPost = state.find(
    (blogPost) => blogPost.id === id
  );
  return <BlogPostForm
  initialValues = {{title: blogPost.title, content: blogPost.content}}
  onSubmit={(title, content) => {
    editBlogPost(id, title, content, ()=> navigation.pop());
  }}/>;
}
BlogPostForm.defaultProps = { //for case that CreateScreen uses this component and it doesn't send initialValues
    initialValues:{
        title:'',
        content:''
    }
}
const styles = StyleSheet.create({});
