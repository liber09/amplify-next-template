"use client"
import { useState, useEffect } from 'react'
import styles from './menu.module.scss'
import Link from 'next/link'
import { useAuth } from '../../_functions/AuthContext';
import { useRouter } from 'next/navigation';

export default function Menu() {
    const[isOpen,setIsOpen] = useState(false);
    const {state, dispatch} = useAuth();
    const router = useRouter();

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleLinkClick = () => {
        if(isOpen){
            setIsOpen(false);
        }
    }
    const handleLogout = () => {
        console.log('Logging out and redirecting...');  
        router.push('/');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <nav className={isOpen === false ? styles.main_nav : styles.main_nav_open}>
          <button onClick={handleClick} className={isOpen === false ? styles.main_nav_toggle : styles.main_nav_toggle_open}></button>
          <menu className={isOpen === false ? styles.main_menu : styles.main_menu_open}>
            <Link href="/" onClick={handleLinkClick} className={styles.link}>
              <li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Hem</li>
            </Link>
            {state.isAuthenticated && (
                    <Link href="/journal" onClick={handleLinkClick} className={styles.link}>
                        <li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>
                            <span>Din journal</span>
                        </li>
                    </Link>
            )}
            <Link href="/account" onClick={handleLinkClick} className={styles.link}>
              <li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>
                {state.isAuthenticated ? (
                  <span onClick={handleLogout}>Logga ut</span>
                ) : (
                  <Link href="/login">
                    <span>Logga in</span>
                  </Link>
                )}
              </li>
            </Link>
            <Link href={'/diseases'}>Sjukdomar</Link>
          </menu>
        </nav>
      );
}