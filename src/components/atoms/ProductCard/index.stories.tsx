import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Product } from '~/types';
import ProductCard from '.';

export default {
  title: 'Atoms / ProductCard',
  decorators: [withKnobs],
  component: ProductCard,
};

const product: Product = {
  id: 55900734,
  name: 'Apple 10.5-inch iPad Pro Wi-Fi + Cellular 512GB Rose Gold',
  thumbnailImage:
    'https://i5.walmartimages.com/asr/127d2825-b0ea-4149-9b89-da2042f03f7f_1.58254028f8ed03912ac775e6bbe0d704.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
  salePrice: 1283.99,
  numReviews: 2,
  customerRating: 5,
};

export const index = () => {
  return <ProductCard product={product} onClick={action('클릭')} />;
};
