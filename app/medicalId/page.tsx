'use client'
import AuthenticatedComponent from '@/src/_components/authenticatedComponent/AuthenticatedComponent';
import styles from './page.module.scss';


const MedicalId = () => { 

  return (
    <>
    {/* // <AuthenticatedComponent> */}
        <h1 className={styles.pageTitle}>Medicinskt ID</h1>

        {/* <MedicalId></MedicalId> */}
    {/* // </AuthenticatedComponent> */}
    </>
  )
};

export default MedicalId;