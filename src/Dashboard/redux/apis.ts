import axios from 'axios';

export const fetchMediaAPI = async () => {
  const { data } = await axios.get(
    "https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos"
  );

  return data;
};