export const getToken = () => window.sessionStorage.getItem('token');

export const setToken = (token : string) => {
  if (token) {
    window.sessionStorage.setItem('token', token);
  }
};

export const removeToken = () => {
  window.sessionStorage.removeItem('token');
};
