import React from 'react'
import styles from './search.module.scss';
import Image from 'next/image';
import ImageHandler from '@/src/_functions/imageHandler';

export default function Search() {
    return ( 
        <>
            <section className={styles.searchContainer}>
                <input 
                    className={styles.searchField} 
                    type='text'
                    placeholder='Sök...' 
                />
                <article className={styles.searchIcon}>
                    <Image 
                        src={ImageHandler('Search_sepg8z').toURL()} 
                        alt='MediMe logo' 
                        height={20} 
                        width={20}>
                    </Image>
                </article>
                
            </section>
        </>
    )
}