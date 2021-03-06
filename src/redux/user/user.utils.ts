export const getToken = () => window.localStorage.getItem('token');

export const setToken = (token : string) => {
  if (token) {
    window.localStorage.setItem('token', token);
  }
};

export const removeToken = () => {
  window.localStorage.removeItem('token');
};
