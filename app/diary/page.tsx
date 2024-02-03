"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import ImageHandler from "@/src/_functions/imageHandler";
import type { Schema } from '@/amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

interface IDiaryPost {
  name: string;
  date: string;
  text: string;
}

const client = generateClient<Schema>()

const Diary: React.FC = () => {
  const [diaryPosts, setDiaryPostList] = useState<IDiaryPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [newPostText, setNewPostText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % diaryPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + diaryPosts.length) % diaryPosts.length);
  };

  const handleAddNewPost = () => {
    if (!isPopupVisible){
      setPopupVisibility(true);
    }else{
      setPopupVisibility(false);
    }
    
  };

  const handleSaveNewPost = async () => {
    // Perform the logic to save the new post
    // You can use the 'newPostText' state to access the entered text

    // For example:
    // await client.models.YourDiaryModel.create({
    //   text: newPostText,
    //   // other fields...
    // });

    // After saving, close the popup and fetch updated data
    setPopupVisibility(false);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://private-ef3595-diary15.apiary-mock.com/diary');
      const data: IDiaryPost[] = await response.json();
      setDiaryPostList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className={styles.page} style={{
      backgroundImage: `url(${ImageHandler('brown-paper-with-brown-background-that-says-word-it_ecclv1').toURL()})`
    }}>
      <section className={styles.diaryContainer}>
        <div className={styles.pageContent}>
          <article className={styles.leftSide}>
            <button className={styles.button} onClick={handlePrev}>Bakåt</button>
          </article>
          <article className={styles.diaryPost} key={currentIndex}>
            <h2>{diaryPosts[currentIndex]?.date}</h2>
            <p>{diaryPosts[currentIndex]?.text}</p>
          </article>
          <article className={styles.rightSide}>
            <button className={styles.button} onClick={handleNext}>Framåt</button>
          </article>
        </div>
      </section>
      <button className={styles.addNewPost} onClick={handleAddNewPost}>Lägg till ny anteckning</button>

      {isPopupVisible && (
        <div className={`${styles.popup} ${isPopupVisible ? styles.active : ''}`}>
          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            placeholder="Enter your new post text"
          />
          <button onClick={handleSaveNewPost}>Save</button>
        </div>
      )}
    </section>
  );
};

export default Diary;
