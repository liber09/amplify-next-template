'use client'
import AuthenticatedComponent from '@/src/_components/authenticatedComponent/AuthenticatedComponent';


const MyHealth = () => { 

  return (
    <AuthenticatedComponent>
        <h1>Min hälsa</h1>
    </AuthenticatedComponent>
  )
};

export default MyHealth;
