'use client'
import { useState } from 'react';
import styles from './page.module.scss'
import DynamicButton from '../../src/_components/dynamicButton/dynamicButton';
import { useAuth } from '../../src/_functions/AuthContext';
import handleSignUp from '@/src/_functions/auth-signup';


const Signup:React.FC = () => {
  const {dispatch} = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleSignup = () => {
    const signUpData = {
      username: userName,
      password: password,
      email: email,
      phone_number: phoneNumber,
    };
  
    handleSignUp(signUpData)
      .then(() => {
        dispatch({ type: 'LOGIN', userName: userName, password: password });
      })
      .catch((error) => {
        console.error('Error during signup:', error);
      });
  };
  

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <section className={styles.signupContainer}>
      <h1>Var vänlig och fyll i dina uppgifter för att registrera dig</h1>
      <input 
        className={styles.textField} 
        type='text'
        placeholder='Användarnamn'
        value={userName}
        onChange={handleUserNameChange}
      />
      <input 
        className={styles.textField} 
        type='password'
        placeholder='Lösenord'
        value={password}
        onChange={handlePasswordChange}
      />
      <input 
        className={styles.textField} 
        type='text'
        placeholder='Epost'
        value={email}
        onChange={handleEmailChange}
      />
      <input 
        className={styles.textField} 
        type='text'
        placeholder='Telefonnummer'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />

      <DynamicButton text={'Registrera mig'} backgroundColor='#B0001E' onClick={handleSignup}></DynamicButton>
      
    </section>
  );
};

export default Signup;
