import React, { useState } from 'react';

import personData from '../../data.json';
import Card from '../Card';
import styles from './cardContainer.module.scss';

const CardContainer = () => {
  const { data } = personData;
  const [isGrid, setIsGrid] = useState(false);

  const handleViewChange = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.headerContainer}>
        <h2>Previous Rulings</h2>
        <select
          className={styles.list}
          onChange={handleViewChange}
        >
          <option value="0">Grid</option>
          <option value="1">List</option>
        </select>
      </div>
      {

    data.map((personInfo) => (
      <Card
        id={personInfo.id}
        name={personInfo.name}
        description={personInfo.description}
        category={personInfo.category}
        picture={personInfo.picture}
        lastUpdated={personInfo.lastUpdated}
        isGrid={isGrid}
      />
    ))
    }
    </div>
  );
};

export default CardContainer;
