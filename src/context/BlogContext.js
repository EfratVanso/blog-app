import React from "react";

const BlogContext = React.createContext();

//provider wrap the whole app
export const BlogProvider = ({ children }) => {
    const blogPosts = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'},
    ];


  // value is the information to share:
  return (
    <BlogContext.Provider value={blogPosts}>
      {/* this will be other component(actually App.js) */}
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
