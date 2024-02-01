'use client'
import { useState } from 'react';
import styles from './page.module.scss'
import DynamicButton from '../../src/_components/dynamicButton/dynamicButton';
import { useAuth } from '../../src/_functions/AuthContext';
import { useRouter } from 'next/navigation';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession } from 'amazon-cognito-identity-js';

const Login:React.FC = () => {
  const {dispatch} = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    const poolData = {
      UserPoolId: 'eu-north-1_vgPyAh1sC',
      ClientId: '419l7467pt918maoa0jevg4uo8',
    };

    const userPool = new CognitoUserPool(poolData);

    const authenticationData = {
      Username: userName,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: userName,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session: CognitoUserSession) => {
        // Successfully signed in
        const accessToken = session.getAccessToken().getJwtToken();
        console.log('Access Token:', accessToken);

        // Access user information from the session
        const jwtPayload = accessToken.split('.')[1];
        const decodedJwt = JSON.parse(atob(jwtPayload));

        console.log('User ID:', decodedJwt.sub);
        console.log('Username:', decodedJwt.username);
        console.log(decodedJwt.given_name + ' ' + decodedJwt.family_name);
        // ... other user attributes

        // Dispatch user information or perform other actions as needed
        dispatch({ type: 'LOGIN', userName: userName, password: password });

        // Redirect to the account page
        router.push('/account');
      },
      onFailure: (err) => {
        // Handle sign-in failure
        console.error('Sign-in error:', err);
        // You might want to display an error message to the user
      },
    });
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
      <article className = {styles.buttonContainer}>
        <DynamicButton text={'Logga in'} backgroundColor='#B0001E' onClick={handleLogin}></DynamicButton>
        <DynamicButton text={'Registrera dig'} onClick={handleCreateNewAccount}></DynamicButton>
      </article>
      
      
    </section>
  );
};

export default Login;
