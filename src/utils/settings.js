import config from 'react-global-configuration';

function createSettings() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  console.log(process.env.REACT_APP_EMAIL_USER_ID);
  console.log(process.env.REACT_APP_SERVICE_ID);
  console.log(process.env.REACT_APP_TEMPLATE_ID);
  config.set({'BACKEND_URL': process.env.REACT_APP_BACKEND_URL}, {freeze: false});
  config.set({'PUBLIC_KEY': process.env.REACT_APP_EMAIL_USER_ID}, {freeze: false});
  config.set({'SERVICE_ID': process.env.REACT_APP_SERVICE_ID}, {freeze: false});
  config.set({'TEMPLATE_ID': process.env.REACT_APP_TEMPLATE_ID}, {freeze: false});
}

export default createSettings;
