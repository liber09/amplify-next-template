'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import ImageHandler from "@/src/_functions/imageHandler";

interface DiaryPost {
  name: string;
  date: string;
  text: string;
}

const Diary: React.FC = () => {
  const [diaryPosts, setDiaryPostList] = useState<DiaryPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://private-ef3595-diary15.apiary-mock.com/diary');
        const data: DiaryPost[] = await response.json();
        setDiaryPostList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % diaryPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + diaryPosts.length) % diaryPosts.length);
  };

  return (
    <section className={styles.page}style={{
        backgroundImage: `url(${ImageHandler('brown-paper-with-brown-background-that-says-word-it_ecclv1').toURL()})`
      }}>
        <section className={styles.diseasesContainer}>
      <div className={styles.pageContent}>
        <article className={styles.sides}>
            <button className={styles.button} onClick={handlePrev}>Bakåt</button>
        </article>
        <article className={styles.diaryPost} key={currentIndex}>
          {/* Render content for the current index */}
          <h2>{diaryPosts[currentIndex]?.date}</h2>
          <p>{diaryPosts[currentIndex]?.text}</p>
        </article>
        <article className={styles.sides}>
            <button className={styles.button} onClick={handleNext}>Frammåt</button>
        </article>
      </div>
    </section>
    </section>
    
  );
};

export default Diary;
