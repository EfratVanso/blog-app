import React from 'react'

const BlogContext = React.createContext();

//provider wrap the whole app
export const BlogProvider = ({children}) => {
    return <BlogContext.Provider>
      {children}  {/* this will be other component(actually App.js) */}
    </BlogContext.Provider>;
};