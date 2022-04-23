import axios from "../components/axios/axios";
import { logout } from "../shared/utils/auth";

export const login = async (data) => {
  try {
    return await axios.post("/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await axios.post("/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure routes
const checkResponse = (exception) => {
  const responseCode = exception.response.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
