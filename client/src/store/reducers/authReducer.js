import { authActions } from "../action/authActions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  userDetails: user,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducers;
