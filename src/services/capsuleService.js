import api from './api';

export const fetchAllCapsuleDetails = () => {
  return api.get('capsules')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching capsule details:', error);
      throw error;
    });
};
