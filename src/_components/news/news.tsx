// News.tsx
"use client"
import React, { useEffect, useState, FC } from 'react';
import { NewsArticle, NewsInfoData } from '../../types/interfaces';
import { getNewsInfoData } from '../../api/news/newsService';
import styles from './news.module.scss'

interface NewsProps {
  numberOfArticles: number;
}

const News: FC<NewsProps> = ({ numberOfArticles }) => {
  const [news, setNews] = useState<NewsInfoData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedArticles, setSelectedArticles] = useState<NewsArticle[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData: NewsInfoData | null = await getNewsInfoData();

        if (jsonData) {
          setNews(jsonData);
          setIsLoading(false);
        } else {
          console.error('Invalid JSON structure or missing articles property.');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    if (news && news && Array.isArray(news)) {
      const shuffledNews = shuffleArray(news);
      setSelectedArticles(shuffledNews.slice(0, numberOfArticles));
    }
  }, [news, numberOfArticles]);

  const shuffleArray = (array: NewsArticle[]): NewsArticle[] => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  if (isLoading) {
    return <article>Laddar...</article>;
  }

  if (!selectedArticles || selectedArticles.length === 0) {
    return <article>Inga nyhetsartiklar att visa</article>;
  }

  return (
    <div>
      <ul>
        {selectedArticles.map((article, index) => (
          <li className={styles.newsItem}key={index}>
            <a className={styles.newsLink} href={article.link} target='_blank'>{article.headLine}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
