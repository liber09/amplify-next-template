'use client'
import { useState } from 'react';
import Image from 'next/image';
import ImageHandler from '../../src/_functions/imageHandler';
import styles from './page.module.scss'
import DynamicButton from '../../src/_components/dynamicButton/dynamicButton';
import { useAuth } from '../../src/_functions/AuthContext';
import { useRouter } from 'next/navigation';

const Login:React.FC = () => {
  const {dispatch} = useAuth();
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogin = () => {
    if (inputValue.length === 12) {
      console.log('login: ', inputValue);
      dispatch({ type: 'LOGIN', identificationNumber: inputValue });
      router.push('/account');
    } else {
      setErrorMessage('Vänligen ange ditt personnummer med 12 siffror');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = event.target.value.replace(/[^0-9]/g, '');
    setInputValue(sanitizedValue);
    setErrorMessage('');
  };

  return (
    <section className={styles.loginContainer}>
      <Image className={styles.bankIdLogo}
        src={ImageHandler('BankID_logo_jsncyl').toURL()} 
        alt='Bild med en utryckande ambulans och texten vid livshotande tillstånd, ring 112' 
        height={515} 
        width={620}>
      </Image>

      <input 
        className={styles.textField} 
        type='text'
        placeholder='ÅÅÅÅMMDDNNNN'
        value={inputValue}
        onChange={handleInputChange}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <DynamicButton text={'Logga in'} onClick={handleLogin}></DynamicButton>
      
    </section>
  );
};

export default Login;
