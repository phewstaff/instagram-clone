import { ActionTypes } from "../constants/actionTypes";
import fakeInstagramApi from "../../apis/fakeInstagramApi";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const fetchPosts = () => async (dispatch) => {
  const response = await fakeInstagramApi.get("/posts");
  dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
};

export const fetchSuggestions = () => async (dispatch) => {
  const response = await fakeInstagramApi.get("/suggestions");
  dispatch({ type: ActionTypes.FETCH_SUGGESTIONS, payload: response.data });
};

export const createPost = (post) => async (dispatch) => {
  const response = await fakeInstagramApi.post("/posts", post, config);
  dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
};

export const fetchProfile = () => async (dispatch) => {
  const response = await fakeInstagramApi.get("/profile");

  dispatch({ type: ActionTypes.FETCH_PROFILE, payload: response.data });
};

export const deletePost = (id) => async (dispatch) => {
  await fakeInstagramApi.delete(`/posts/${id}`, config);

  dispatch({ type: ActionTypes.DELETE_POST, payload: id });
};

export const updatePost = (id, post) => async (dispatch) => {
  const response = await fakeInstagramApi.patch(`/posts/${id}`, post, config);
  console.log(response.data);

  dispatch({
    type: ActionTypes.UPDATE_POST,
    payload: response.data,
  });
};

export const isTokenValid = async () => {
  const response = await fakeInstagramApi.get("/user", config);
};

export default {
  fetchPosts,
  createPost,
  fetchSuggestions,
  fetchProfile,
  deletePost,
  updatePost,
};
