import axios from 'axios';
import { NewsInfoData } from '../types/interfaces';

export const getNewsInfoData = async (): Promise<NewsInfoData> => {
  try {
    const apiUrl = `https://private-bf5c8-news64.apiary-mock.com/articles`;
    const response = await axios.get<NewsInfoData>(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
