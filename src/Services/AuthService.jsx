const AuthService = {
  isLoggedIn: function() {
    const accessToken = localStorage.getItem('access_token');
    return Boolean(accessToken);
  },
  getToken: function() {
    if (!this.isLoggedIn()) return null;
    return localStorage.getItem('access_token');
  },
};

export default AuthService;
