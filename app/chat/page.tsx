'use client'
import React, { useState, useEffect, ChangeEvent } from 'react';
import ChatRoom from '@/src/_components/chatRoom/ChatRoom';
import styles from './page.module.scss';
import { healthcareProviderData, HealthcareProvider } from '../../src/types/interfaces';
import { getHealthCareProviderData } from '../../src/_functions/getHealthCareProviders'
import HealthcareProvidersDropdown from '../../src/_components/chooseHealthCareCenter/chooseHealthCareCenter';
import DynamicButton from '../../src/_components/dynamicButton/dynamicButton';

const Chat: React.FC = () => {
  const [hasActiveChat, setHasActiveChat] = useState<boolean>(false);
  const [healthCareProviders, setHealthCareProviders] = useState<HealthcareProvider[] | null>(null);
  const [selectedHealthcareProvider, setSelectedHealthcareProvider] = useState<HealthcareProvider | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedProvider, setSelectedProvider] = useState<HealthcareProvider | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const binId = process.env.NEXT_PUBLIC_HC_PROVIDERS_BIN_ID;
        const apiKey = process.env.NEXT_PUBLIC_JSONBIN_API_KEY;
    
        console.log('BIN ID:', binId);
        console.log('API Key:', apiKey);
    
        if (!binId || !apiKey) {
          console.error('Healthcare provider API credentials are missing.');
          return;
        }
    
        const jsonData: healthcareProviderData = await getHealthCareProviderData(binId, apiKey);
        console.log('jsonData: ', jsonData)
        setHealthCareProviders(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching healthcare provider data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Healthcare Providers Data:', healthCareProviders);
  }, []);

  useEffect(() => {
    
    const checkActiveChat = () => {
      
      setTimeout(() => {
        const isChatActive = false;
        setHasActiveChat(isChatActive);
      }, 1000); 
    };

    checkActiveChat();
  }, []); 

  const startChat = () => {
    setHasActiveChat(true);
  };

  const handleProviderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    if (healthCareProviders !== null){
      const provider = healthCareProviders.find((p) => p.id === selectedId) || null;
    setSelectedProvider(provider);
    }
  };


  return (
    <>
      {isLoading ? (
        <section className={styles.loadingContainer}>
          <p className={styles.loadText}>Laddar...</p>
        </section>
      ) : (
        <section key={JSON.stringify(healthCareProviders)}>
          <h1 className={styles.pageTitle}>
            {hasActiveChat
              ? `Chat med ${selectedHealthcareProvider?.name || 'din vårdcentral'}`
              : 'Chatta med din vårdcentral'}
          </h1>
          <section className={styles.chatContent}>
          {!hasActiveChat && healthCareProviders !== null && (
            <select className={styles.dropDown} id='healthcareProvider' onChange={handleProviderChange}>
              <option value=''>Välj din vårdcentral...</option>
              {healthCareProviders.map((provider) => (
                <option key={provider.id} value={provider.id}>
                  {provider.name + ', ' + provider.city}
                </option>
              ))}
            </select>
          )}
            <DynamicButton text='Starta chat' backgroundColor='#B0001E' onClick={startChat} />
            {hasActiveChat && selectedHealthcareProvider && <ChatRoom healthcareProvider={selectedHealthcareProvider} />}
          </section>
        </section>
      )}
    </>
  );
};
export default Chat;
