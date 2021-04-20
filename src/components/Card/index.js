import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';
import cx from 'classnames';

import styles from './card.module.scss';
import thumbsUp from '../../resources/svg/thumbs-up.svg';
import thumbsDown from '../../resources/svg/thumbs-down.svg';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getPercentages = (id) => {
  const votes = JSON.parse(localStorage.getItem(`votes_${id}`));
  if (!votes) {
    return 0;
  }

  const { positiveVotes, negativeVotes } = votes;
  if (positiveVotes + negativeVotes === 0) {
    return { upVotePercent: 0, downVotePercent: 0 };
  }
  const positivePercentage = (positiveVotes / (positiveVotes + negativeVotes)) * 100;
  const negativePercentage = (negativeVotes / (positiveVotes + negativeVotes)) * 100;

  return (
    { upVotePercent: positivePercentage.toFixed(1), downVotePercent: negativePercentage.toFixed(1) }
  );
};

const getTimeLabel = (category, lastUpdated) => {
  const currentDate = dayjs();
  const publishedDate = dayjs(lastUpdated).format('YYYY-MM-DDTHH:mm:ssZ');
  const capitalizedCategory = capitalize(category);
  const years = currentDate.diff(publishedDate, 'year');
  if (years) {
    return `${years} year${years === 1 ? '' : 's'} ago in ${capitalizedCategory}`;
  }
  const months = currentDate.diff(publishedDate, 'month');
  if (months) {
    return `${months} month${months === 1 ? '' : 's'} ago in ${capitalizedCategory}`;
  }
  const days = currentDate.diff(publishedDate, 'day');
  if (days) {
    return `${days} day${days === 1 ? '' : 's'} ago in ${capitalizedCategory}`;
  }
  const hours = currentDate.diff(publishedDate, 'hour');
  if (hours) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago in ${capitalizedCategory}`;
  }
  const minutes = currentDate.diff(publishedDate, 'minute');
  if (minutes) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago in ${capitalizedCategory}`;
  }
  const seconds = currentDate.diff(publishedDate, 'second');
  if (seconds) {
    return `${seconds} second${seconds === 1 ? '' : 's'} ago in ${capitalizedCategory}`;
  }
  return '';
};

const Card = ({
  id,
  name,
  description,
  category,
  picture,
  lastUpdated,
  isGrid,
}) => {
  useEffect(() => {
    if (!localStorage.getItem(`votes_${id}`)) {
      localStorage.setItem(`votes_${id}`, JSON.stringify({ positiveVotes: 0, negativeVotes: 0 }));
    }
  }, []);

  const [selectedVote, setSelectedVote] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVoteSelection = (vote) => {
    setSelectedVote(vote);
  };

  const handleSubmit = () => {
    if (hasVoted) {
      setHasVoted(false);
      setSelectedVote(null);
      return;
    }
    if (selectedVote === null) {
      return;
    }
    const votes = JSON.parse(localStorage.getItem(`votes_${id}`));
    const { positiveVotes, negativeVotes } = votes;
    if (selectedVote === true) {
      localStorage.setItem(`votes_${id}`, JSON.stringify({ positiveVotes: positiveVotes + 1, negativeVotes }));
    } else if (selectedVote === false) {
      localStorage.setItem(`votes_${id}`, JSON.stringify({ positiveVotes, negativeVotes: negativeVotes + 1 }));
    }
    setHasVoted(true);
  };

  const { upVotePercent, downVotePercent } = getPercentages(id);
  const trimmedDescription = description.length < 85
    ? description
    : `${description.substring(0, 85)}...`;
  const trimmedName = name.length < 20 ? name : `${name.substring(0, 20)}...`;

  return (
    <div className={cx({
      [styles.card]: !isGrid,
      [styles.gridCard]: isGrid,
    })}
    >
      <img className={styles.background} alt="person" src={picture} />
      <div className={styles.content}>
        <h3 className={styles.names}>{trimmedName}</h3>
        <p className={styles.descriptions}>{trimmedDescription}</p>
      </div>
      <div className={styles.votingContainer}>
        <p className={styles.dateCategory}>
          {getTimeLabel(category, lastUpdated)}
        </p>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={cx(`${styles.iconButton} ${styles.thumbsUp}`, {
              [styles.isSelected]: selectedVote,
            })}
            aria-label="thumbs up"
            onClick={() => handleVoteSelection(true)}
          >
            <img src={`${thumbsUp}`} alt="thumbs up" />
          </button>
          <button
            type="button"
            className={cx(`${styles.iconButton} ${styles.thumbsDown}`, {
              [styles.isSelected]: selectedVote === false,
            })}
            aria-label="thumbs down"
            onClick={() => handleVoteSelection(false)}
          >
            <img src={`${thumbsDown}`} alt="thumbs down" />
          </button>
          <button type="button" className={styles.voteButton} onClick={handleSubmit}>
            {hasVoted ? 'Vote Again' : 'Vote Now' }
          </button>
        </div>
      </div>
      <div className={styles.thumbsContainer}>
        <div
          className={styles.upVotes}
          style={{ width: `${upVotePercent}%` }}
        >
          <img src={`${thumbsUp}`} alt="thumbs up" />
          <h3>{`${upVotePercent}%`}</h3>
        </div>
        <div
          className={styles.downVotes}
          style={{ width: `${downVotePercent}%` }}
        >
          <img src={`${thumbsDown}`} alt="thumbs down" />
          <h3>{`${downVotePercent}%`}</h3>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  isGrid: PropTypes.bool.isRequired,
};

export default Card;
