import styles from './footer.module.scss';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    
    return (
        <>
            <footer className={styles.footerContainer}>
                <article className={styles.redSection}>
                </article>
                <article className={styles.blueSection}>
                    <Link className={styles.footerLink} href={'/about'}>Om oss</Link>
                    <Link className={styles.footerLink} href={'/contact'}>Kontakt</Link>
                    <Link className={styles.footerLink} href={'/services'}>E-tjänster</Link>
                    <Link className={styles.footerLink} href={'https://ellie-9694e4.zapier.app/'}>Fråga Ellie</Link>
                    <Link className={styles.footerLink} href={'/about'}>Vårdcentraler</Link>
                    <Link className={styles.footerLink} href={'/about'}>Stöd & hjälp</Link>
                    <Link className={styles.footerLink} href={'/about'}>Föreningar</Link>
                </article>
            </footer>
        </>
    );
}

