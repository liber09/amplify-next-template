import Link from 'next/link';
import styles from './page.module.scss';

const NotFoundPage: React.FC = () => {
  return (
      <section>
        <h1>404 - Page Not Found</h1>
        <Link className={styles.returnHome}href={'/'}>Tillbaka till startsidan</Link>
      </section>
    );
  };
  
  export default NotFoundPage;
  