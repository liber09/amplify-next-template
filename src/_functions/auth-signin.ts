import { signIn as amplifySignIn } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json'

interface SignInData {
  username: string;
  password: string;
}

export default async function signIn({ username, password }: SignInData): Promise<boolean> {
  try {
    Amplify.configure(config);
    const { isSignedIn, nextStep } = await amplifySignIn({ username, password });
    return isSignedIn;
  } catch (error) {
    console.log('error signing in', error);
    return false;
  }
}
