'use client'
import { useState } from 'react';
import styles from './page.module.scss'
import DynamicButton from '../../src/_components/dynamicButton/dynamicButton';
import { useAuth } from '../../src/_functions/AuthContext';
import { useRouter } from 'next/navigation';

const Login:React.FC = () => {
  const {dispatch} = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
      dispatch({ type: 'LOGIN', userName: userName, password: password });
      router.push('/account');
  };

  const handleCreateNewAccount = () => {
    router.push('/signup');
};

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <section className={styles.loginContainer}>

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

      <DynamicButton text={'Logga in'} backgroundColor='#B0001E' onClick={handleLogin}></DynamicButton>

      <DynamicButton text={'Registrera dig'} onClick={handleCreateNewAccount}></DynamicButton>
      
    </section>
  );
};

export default Login;
