import { signOut as amplifySignOut } from 'aws-amplify/auth';

export default async function handleSignOut(): Promise<void> {
  try {
    await amplifySignOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}
