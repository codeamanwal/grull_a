import config from 'react-global-configuration';
import AuthService from './AuthService';

const fetchMeData = async () => {
  const accessToken = AuthService.getToken();
  try {
    // Perform the GET request to fetch data
    const response = await fetch(`${config.get('BACKEND_URL')}/api/v0/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Now, you can use the 'data' object to access the fetched information

    return data; // Return the fetched data
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Rethrow the error so it can be caught in the calling function
  }
};

export default fetchMeData;
