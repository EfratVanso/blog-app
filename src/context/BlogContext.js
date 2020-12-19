import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state,{title: `Blog Post #${state.length+1}`}];
        default:
            return state;
    }
};
//provider wrap the whole app
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  // value is the information to share:
  
  const addBlogPost = () => {
      dispatch({type: 'add_blogpost'});
  };
  
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {/* this will be other component(actually App.js) */}
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
