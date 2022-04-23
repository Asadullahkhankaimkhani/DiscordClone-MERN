import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  const userDetails = localStorage.getItem("user");
  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
});

export default instance;
