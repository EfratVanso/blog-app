import React from 'react'

const BlogContext = React.createContext();

//provider wrap the whole app
export const BlogProvider = ({children}) => {
    // value is the information to share:
    return <BlogContext.Provider value={5}> 
    {/* this will be other component(actually App.js) */}
      {children}  
    </BlogContext.Provider>;
};

export default BlogContext;