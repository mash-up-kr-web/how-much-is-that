import React from 'react';
import { StarIcon } from '@lib/icons';
import './style.scss';

interface Props {
  rating: number;
}

//TODO: rating 처리
const StarRating = (props: Props) => {
  return (
    <span className="star_rating">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon className="grey" />
    </span>
  );
};

export default StarRating;
