import axios from "../components/axios/axios";

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
