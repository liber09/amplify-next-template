import { signUp } from 'aws-amplify/auth';

interface SignUpData {
  username: string;
  password: string;
  email: string;
  phone_number: string;
  given_name: string;
  family_name: string;
}

export default async function handleSignUp({ username, password, email, phone_number, given_name, family_name }: SignUpData): Promise<void> {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number, // E.164 number convention
          given_name,
          family_name,
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}
