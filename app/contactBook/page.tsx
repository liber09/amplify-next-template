"use client"
import Link from 'next/link';
import styles from './page.module.scss';
import { PrismaClient } from '@prisma/client'

const ContactBook: React.FC = () => {

    const prisma = new PrismaClient()
  
    const addContact = () => {
        const contact = prisma.contact.create({
            data: {
              name: 'Psykolog',
              address: 'Storgatan 12',
              postalCode: '45332',  
              city: 'Storuman',        
              phone: '345987345',       
              web: 'https://psykolog.nu'
    
            },
          })
          console.log(contact)
    }

    return (
        <section className={styles.contactBookContainer}>
            <h1 className={styles.pageTitle}>Kontaktboken</h1>
            <article className={styles.buttonContainer}>
                <button className={styles.addButton} onClick={addContact}>Lägg till ny kontakt</button>
            </article>
            
        </section>
        );
    };
  
  export default ContactBook;
  