export const logout = () => {
  localStorage.clear();
  //   localStorage.removeItem("user");
  window.location.href = "/login";
};
