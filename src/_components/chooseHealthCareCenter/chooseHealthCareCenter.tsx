import styles from './chooseHealthCareCenter.module.scss';
import React, { useState, ChangeEvent } from 'react';
import { HealthcareProvider } from '@/app/types/interfaces';

interface HealthcareProvidersDropdownProps {
  healthcareProviders: HealthcareProvider[];
  setSelectedHealthcareProvider: React.Dispatch<React.SetStateAction<HealthcareProvider | null>>;
}

const HealthcareProvidersDropdown: React.FC<HealthcareProvidersDropdownProps> = ({ healthcareProviders, setSelectedHealthcareProvider }) => {
    console.log('HealthcareProvidersDropdown - healthcareProviders (props):', healthcareProviders);

    const [selectedProvider, setSelectedProvider] = useState<HealthcareProvider | null>(null);
  
    const handleProviderChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedId = event.target.value;
      const provider = healthcareProviders.find((p) => p.id === selectedId) || null;
      setSelectedProvider(provider);      
    };
  
    return (
      <div>
        <label htmlFor="healthcareProvider"></label>
        <select className={styles.dropDown} id="healthcareProvider" onChange={handleProviderChange}>
          <option value="">Välj din vårdcentral...</option>
          {healthcareProviders.map((provider) => (
            <option key={provider.id} value={provider.id}>
              {provider.name + ", " + provider.city}
            </option>
          ))}
        </select>
  
        {selectedProvider && (
          <section className={styles.info}>
            <h2 className={styles.healthcareProviderTitle}>{selectedProvider.name}</h2>
            <p>Ort: {selectedProvider.city}</p>
            <p>Adress: {selectedProvider.street}</p>
            <p>Postnr: {selectedProvider.postalCode}</p>
            <p>Telefon: {selectedProvider.phone}</p>
          </section>
        )}
      </div>
    );
  };
  
  export default HealthcareProvidersDropdown;