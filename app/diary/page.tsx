"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import ImageHandler from "@/src/_functions/imageHandler";
import type { Schema } from '@/amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import * as API from '../../src/API';

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
    try {
      const input: API.CreateDiaryPostInput = {
        name: 'YourName', // Set the appropriate name here
        date: new Date().toISOString(), // Use the current date as an example
        text: newPostText,
      };

      // const response = await client.mutate<API.CreateDiaryPostMutation>({
      //   mutation: API.createDiaryPost,
      //   variables: { input },
      // });

      // const createdDiaryPost = response?.data?.createDiaryPost;
      // if (createdDiaryPost) {
      //   console.log('New diary post created:', createdDiaryPost);
      //   setPopupVisibility(false);
      //   fetchData();
      // }
    } catch (error) {
      console.error('Error creating new diary post:', error);
    }
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
