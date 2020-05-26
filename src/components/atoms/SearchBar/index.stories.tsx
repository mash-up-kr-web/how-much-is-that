import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SearchBar from '.';

export default {
  title: 'Atoms / SearchBar',
  decorators: [withKnobs],
  component: SearchBar,
};

export const index = () => {
  return <SearchBar onSubmit={action('검색')} />;
};
