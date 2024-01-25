import React, { useState } from 'react';
import styles from './listComponent.module.scss';

interface ListComponentProps {
  data: string[];
}

const ListComponent: React.FC<ListComponentProps> = ({
  data
  
}) => {
  
  return (
    <section className={styles.listContainer}>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li 
            className={styles.listItem} 
            key={index}>{item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListComponent;
