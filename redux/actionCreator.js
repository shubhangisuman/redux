import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQ,
  FETCH_USER_SUCCESS,
  REMOVE_USER,
} from "./actionTypes";

const fetchUser = () => {
  return {
    type: FETCH_USER_REQ,
  };
};

const fetchUserFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: payload,
  };
};

const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const fetchUserRequest = () => {
  return (dispatch) => {
    dispatch(fetchUser);
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("User Data:", data);
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch(fetchUserFailure(data));
      });
  };
};

export {
  fetchUser,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserRequest,
  removeUser,
};
