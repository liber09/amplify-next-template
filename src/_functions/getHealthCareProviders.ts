import axios from 'axios';
import { HealthcareProvider } from '../types/interfaces';

export const getHealthCareProviderData = async (): Promise<HealthcareProvider[]> => {
  try {
    const apiUrl = 'https://private-bdb318-healthcarecenters.apiary-mock.com/healthcarecenters';

    const response = await axios.get<HealthcareProvider[]>(apiUrl, {
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
