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
        posts: state.posts.filter((item) => item._id !== payload),
      };

    case ActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((item) =>
          item._id !== payload._id ? item : payload
        ),
      };

    case ActionTypes.SIGN_IN:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
export default DataReducer;
