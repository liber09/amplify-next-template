import axios from 'axios';
import { healthcareProviderData } from '../types/interfaces';

const BASE_URL = 'https://api.jsonbin.io/v3';

export const getHealthCareProviderData = async (binId: string, apiKey: string): Promise<healthcareProviderData> => {
  try {
    const apiUrl = 'https://private-bdb318-healthcarecenters.apiary-mock.com/healthcarecenters';

    const response = await axios.get<healthcareProviderData>(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': apiKey,
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};
