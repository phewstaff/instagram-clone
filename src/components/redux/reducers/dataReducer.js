import { ActionTypes } from "../constants/actionTypes";

const initialState = {};

const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, posts: payload };
    case ActionTypes.FETCH_SUGGESTIONS:
      return { ...state, suggestions: payload };
    case ActionTypes.FETCH_PROFILE:
      return { ...state, profile: payload };
    case ActionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, payload] };
    case ActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== payload),
      };
    case ActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((item) =>
          item.id === payload.id ? item === payload : item
        ),
      };
    default:
      return state;
  }
};
export default DataReducer;
