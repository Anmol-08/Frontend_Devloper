import api from './api';

export const fetchAllRocketDetails = () => {
  return api.get('rockets')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching spacecraft details:', error);
      throw error;
    });
};