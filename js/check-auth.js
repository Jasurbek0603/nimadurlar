export function checkAuth() {
  const token = localStorage.getItem("user");

  if (token) {
    return true;
  } else {
    return false;
  }
}
