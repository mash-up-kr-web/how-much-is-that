import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import StarRating from '.';

export default {
  title: 'Atoms / StarRating',
  decorators: [withKnobs],
  component: StarRating,
};

export const index = () => {
  return <StarRating rating={number('평점 0~5', 4, { min: 0, max: 5 })} />;
};
