import React, {useState} from "react";

const BlogContext = React.createContext();

//provider wrap the whole app
export const BlogProvider = ({ children }) => {
    // const blogPosts = [
    //     {title: 'Blog Post #1'},
    //     {title: 'Blog Post #2'},
    // ];
    const [blogPosts, setBlogPosts]= useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length+1}`}]);
    };
  // value is the information to share:
  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
      {/* this will be other component(actually App.js) */}
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
