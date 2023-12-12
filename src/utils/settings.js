import config from 'react-global-configuration';

function createSettings() {
  config.set(
      {
        'BACKEND_URL': process.env.REACT_APP_BACKEND_URL,
        'EMAILJS_USER_ID': process.env.REACT_APP_EMAIL_USER_ID,
        'EMAILJS_SERVICE_ID': process.env.REACT_APP_SERVICE_ID,
        'EMAILJS_TEMPLATE_ID': process.env.REACT_APP_TEMPLATE_ID,
      },
      {freeze: false},
  );
}

export default createSettings;
