"use client"
import React, { useState, useEffect } from "react";
import ChatRoom from "@/app/_components/chatRoom/ChatRoom";
import styles from './page.module.scss';
import { healthcareProviderData, HealthcareProvider } from '../types/interfaces';
import { getHealthCareProviderData } from "../api/healthcareProviders/getHealthCareProviders";
import HealthcareProvidersDropdown from '../_components/chooseHealthCareCenter/chooseHealthCareCenter';
import DynamicButton from '../_components/dynamicButton/dynamicButton';

const Chat: React.FC = () => {
  const [hasActiveChat, setHasActiveChat] = useState<boolean>(false);
  const [healthCareProviders, setHealthCareProviders] = useState<HealthcareProvider[] | null>(null);
  const [selectedHealthcareProvider, setSelectedHealthcareProvider] = useState<HealthcareProvider | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        console.log("jsonData: ", jsonData)
        setHealthCareProviders(jsonData.record);
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
  }, [healthCareProviders]);

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
              ? `Chat med ${selectedHealthcareProvider || "din vårdcentral"}`
              : "Chatta med din vårdcentral"}
          </h1>
          <section className={styles.chatContent}>
            {!hasActiveChat && (
              <HealthcareProvidersDropdown healthcareProviders={healthCareProviders || []} setSelectedHealthcareProvider={setSelectedHealthcareProvider} />
            )}
            <DynamicButton text="Starta chat" backgroundColor="#B0001E" onClick={startChat} />
            {hasActiveChat && selectedHealthcareProvider && <ChatRoom healthcareProvider={selectedHealthcareProvider} />}
          </section>
        </section>
      )}
    </>
  );
};
export default Chat;
