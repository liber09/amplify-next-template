"use client"
import React, { useEffect, useState } from 'react';
import ListComponent from "../_components/listComponent/listComponent";
import styles from './page.module.scss';

interface Disease {
  name: string;
  shortDescription: string;
  symptoms: string[];
  actions: string;
  checkpoints: string[];
  selfcare: string[];
}

const Diseases: React.FC = () => {
  const [diseaseList, setDiseaseList] = useState<Disease[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://private-cd9496-diseases3.apiary-mock.com/diseases');
        const data: Disease[] = await response.json();
        setDiseaseList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.diseasesContainer}>
      {diseaseList.map((disease, index) => (
        <article key={index} className={styles.diseaseCard}>
          <h1 className={styles.diseaseTitle}>{disease.name}</h1>
          <p className={styles.text}>{disease.shortDescription}</p>
          <h2 className={styles.secondHeadline}>Symptom:</h2>
          <ListComponent data={disease.symptoms} />
          <h2 className={styles.secondHeadline}>När bör du söka vård:</h2>
          <p className={styles.text}>{disease.actions}</p>
          <ListComponent data={disease.checkpoints} />
          <h2 className={styles.secondHeadline}>Vad kan du göra själv:</h2>
          <ListComponent data={disease.selfcare} />
        </article>
      ))}
    </section>
  );
};

export default Diseases;
