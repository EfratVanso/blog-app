import CreateDataContext from "./createDataContext";
import { call } from "react-native-reanimated";
import jsonServer from "../api/jsonServer";


const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

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
     callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload:id });
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`blogposts/${id}`, {title, content});

    dispatch({ type: "edit_blogpost", payload:{id, title, content} });
    callback();
  };
};
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
