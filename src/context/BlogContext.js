import CreateDataContext from "./createDataContext";
import { call } from "react-native-reanimated";
import jsonServer from "../api/jsonServer";


const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    case "delete_blogpost":
        return state.filter((blogPost)=> blogPost.id !== action.payload);
    case "edit_blogpost": 
    console.log(action.payload)
      return state.map(blogPost=>{
        return blogPost.id ===action.payload.id? action.payload :blogPost;// change the appropriate item
      });
    default:   // console.log(action.payload)

      return state;
  }
};
const getBlogPosts = (dispatch) => {
return async () => {
  const response = await jsonServer.get('/blogposts');

  dispatch({type: 'get_blogposts', payload:response.data})
}
}
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title, content});
    // dispatch({ type: "add_blogpost" , payload:{title, content}});
     callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload:id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload:{id, title, content} });
    callback();
  };
};
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
