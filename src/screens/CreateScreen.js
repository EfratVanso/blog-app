import React, { useContext } from "react";
import {  StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function CreateScreen({ navigation }) {
    
  const { addBlogPost } = useContext(Context);
  return <BlogPostForm/>
}

const styles = StyleSheet.create({
  
});
