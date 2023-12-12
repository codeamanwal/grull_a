import config from 'react-global-configuration';

function getBooleanFromEnv(key, defaultValue=false) {
  if (process.env[key] === undefined) {
    return defaultValue;
  }

  const value = process.env[key].toLowerCase();
  return ['true', '1'].includes(value);
}

function createSettings() {
  config.set(
      {
        'BACKEND_URL': process.env.REACT_APP_BACKEND_URL,
        'EMAILJS_USER_ID': process.env.REACT_APP_EMAILJS_USER_ID,
        'EMAILJS_SERVICE_ID': process.env.REACT_APP_EMAILJS_SERVICE_ID,
        'EMAILJS_TEMPLATE_ID': process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        'EMAILJS_SERVICE_ENABLED': getBooleanFromEnv('REACT_APP_EMAILJS_SERVICE_ENABLED'),
      },
      {freeze: false},
  );
}

export default createSettings;
