// ExpandableRow.tsx
import React, { useState } from 'react';
import styles from './ExpandableRow.module.scss';

interface ExpandableRowProps {
  date: string;
  type: string;
  from: string;
  doctor: string;
  additionalInfo: string;
}

const ExpandableRow: React.FC<ExpandableRowProps> = ({
  date,
  type,
  from,
  doctor,
  additionalInfo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.expandableRow}>
      <article className={styles.rowHeader} onClick={handleExpandToggle}>
        <p className={styles.noteDate}>{date}</p>
        <p>{type}</p>
        <p>{from}</p>
        <p>{doctor}</p>
      </article>
      {isExpanded && (
        <article className={styles.additionalInfo}>
          <p>{additionalInfo}</p>
        </article>
      )}
    </section>
  );
};

export default ExpandableRow;
