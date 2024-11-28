import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQ,
  FETCH_USER_SUCCESS,
  REMOVE_USER,
} from "../actionTypes";

const INITIAL_STATE = {
  loading: false,
  users: ["ashu"],
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQ:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USER_FAILURE:
      return { loading: false, users: [], error: action.payload };
    case REMOVE_USER:
      return { loading: false, users: state.users.slice(1), error: "" };
    default:
      return state;
  }
};

export { userReducer };
