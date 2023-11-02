const AuthService = {
  FREELANCER_MODE: 'FREELANCER',
  EMPLOYER_MODE: 'EMPLOYER',
  isFreelancer: function() {
    return this.getUserMode() === this.FREELANCER_MODE;
  },
  getUserMode: function() {
    if (!this.isLoggedIn()) return null;
    return localStorage.getItem('user_mode');
  },
  setUserMode: function(value) {
    if (!this.isLoggedIn()) return;
    localStorage.setItem('user_mode', value);
  },
  toggleUserMode: function() {
    const currMode = this.getUserMode();
    const newMode = currMode === this.EMPLOYER_MODE ? this.FREELANCER_MODE: this.EMPLOYER_MODE;
    this.setUserMode(newMode);
  },
  isLoggedIn: function() {
    const accessToken = localStorage.getItem('access_token');
    return Boolean(accessToken);
  },
  getToken: function() {
    if (!this.isLoggedIn()) return null;
    return localStorage.getItem('access_token');
  },
  setToken: function(token, type='bearer') {
    localStorage.setItem('access_token', token);
    localStorage.setItem('token_type', type);
  },
  clearToken: function() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('user_mode');
  },
  logout: function() {
    // const logoutUrlEndpoint = `${config.get('BACKEND_URL')}/api/v0/auth/logout`;
    if (!this.isLoggedIn()) {
      return;
    }
    // const accessToken = this.getToken();
    // const result = fetch(
    //     logoutUrlEndpoint,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${accessToken}`,
    //       },
    //     },
    // );
    // result.then((response) => {
    //   if (response.ok) {
    //     // Handle success
    //     this.clearToken();
    //   } else {
    //     // Handle error
    //     console.error('Unauthorized to logout.');
    //   }
    // }).catch((error) => {
    //   // Handle network error
    //   console.error('Network error:', error);
    // });
    this.clearToken();
  },
};

export default AuthService;
