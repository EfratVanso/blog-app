import CreateDataContext from "./createDataContext";
import { call } from "react-native-reanimated";

const blogReducer = (state, action) => {
  switch (action.type) {
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
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost" , payload:{title, content}});
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
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{id:1, title: 'TEST POST', content:'bla bla bla bla '}]
);
