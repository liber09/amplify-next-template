'use client'
import React from 'react';
import AuthenticatedComponent from '@/src/_components/authenticatedComponent/AuthenticatedComponent';
import ImageName from '../../src/_components/image-Name/imageName';
import Image from 'next/image';
import Link from 'next/link';
import ImageHandler from '../../src/_functions/imageHandler';
import { useAuth } from '../../src/_functions/AuthContext';
import styles from './page.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Account = () => { 
  const { state } = useAuth();
  console.log('account: ', state.isAuthenticated);
  return (
    <>
    {/* <AuthenticatedComponent> */}
      <section>
        <ImageName identificationNumber={"image"}></ImageName>
        <Link href='/medicalId'>
          <p className={styles.medicalId}>
            <span>
              <Image
                src={ImageHandler("Medical_History_xi7noq").toURL()}
                alt={"Ikon för medicinskt id"}
                width={25} 
                height={25} 
              />
            </span>Medicinskt ID
          </p>
        </Link>
      </section>
      <section className={styles.linksContainer}>
        <article className={styles.column}>
          <Link href={'/myhealth'}>  
            <p className={styles.link}>
              <span className={styles.icon}>
                <Image
                  src={ImageHandler('icon__Heartbeat__yvuota').toURL()}
                  alt={'Ikon för min hälsa'}
                  width={25}
                  height={25}
                />
              </span>
              Min hälsa
            </p>
          </Link>
          <p className={styles.link}>
            <span className={styles.icon}>
              <Image
                src={ImageHandler('icon__Alternate_Calendar__xfv3vz').toURL()}
                alt={'Ikon för min kalender'}
                width={25}
                height={20}
              />
            </span>
            Kalender
          </p>
          <p className={styles.link}>
            <span className={styles.icon}>
              <Image
                src={ImageHandler('icon__Alternate_Prescription_Bottle__q447bx').toURL()}
                alt={'Ikon för mediciner'}
                width={25}
                height={20}
              />
            </span>
            Mediciner
          </p>
          <Link href={'/journal'}>
            <p className={styles.link}>
              <span className={styles.icon}>
                <Image
                  src={ImageHandler('icon__book__viqxkl').toURL()}
                  alt={'Ikon för journaler'}
                  width={25}
                  height={20}
                />
              </span>
              Journaler
            </p>
          </Link>
          <Link href={'/diary'}>
            <p className={styles.link}>
              <span className={styles.diary}>
                <Image
                  src={ImageHandler('Spiral_Bound_Booklet_drpanh').toURL()}
                  alt={'Ikon för dagboken'}
                  width={25}
                  height={25}
                />
              </span>
              Dagboken
            </p>
          </Link>
        </article>
        <article className={styles.column}>
          <p className={styles.link}>
            <span className={styles.icon}>
              <Image
                src={ImageHandler('icon__Envelope__smql3b').toURL()}
                alt={'Ikon för mailboxen'}
                width={25}
                height={25}
              />
            </span>
            Mailboxen
          </p>
          <Link href={'/contactBook'}>
            <p className={styles.link}>
              <span className={styles.icon}>
                <Image
                  src={ImageHandler('icon__Identification_Card__f1wret').toURL()}
                  alt={'Ikon för kontakboken'}
                  width={25}
                  height={20}
                />
              </span>
              Kontaktboken
            </p>
          </Link>
          <Link href={'/chat'}>
            <p className={styles.link}>
              <span className={styles.icon}>
                <Image
                  src={ImageHandler('Chat_Bubble_wt0jb8').toURL()}
                  alt={'Ikon för chattpunkten'}
                  width={25}
                  height={25}
                />
              </span>
              Chattpunkten
            </p>
          </Link>
          <p className={styles.link}>
            <span className={styles.icon}>
              <Image
                src={ImageHandler('People_t0mcog').toURL()}
                alt={'Ikon för anhörigkollen'}
                width={25}
                height={25}
              />
            </span>
            Anhörigkollen
          </p>
        </article>
      </section>
      <section className={styles.calendarSection}>
        <h2 className={styles.myCalendar}>Min kalender</h2>
        <article className={styles.calendarContainer}>
          <Calendar />
        </article>
      </section>
      <section className={styles.associationsNewsSection}>
        <h2 className={styles.assosiationsTitle}>Senaste nytt inom Föreningslivet</h2>
        <p className={styles.assosiationTitle}>SRF KSOT:</p>
        <p className={styles.assosiationText}>Vinprovning på Ulkeröds gård</p>
        <p className={styles.assosiationTitle}>PRO Lilla Edet:</p>
        <p className={styles.assosiationText}>Föreläsning från polisen om hur du bäst skyddar dig och ditt hem</p>
        <p className={styles.assosiationTitle}>Svampens IK:</p>
        <p className={styles.assosiationText}>Mullsjön runt, vem plockar mest?</p>
      </section>
    {/* </AuthenticatedComponent> */}
    </>
  );
};

export default Account;
