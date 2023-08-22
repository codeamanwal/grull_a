import config from 'react-global-configuration';

function createSettings() {
  config.set({'BACKEND_URL': process.env.REACT_APP_BACKEND_URL}, {freeze: false});
}

export default createSettings;
