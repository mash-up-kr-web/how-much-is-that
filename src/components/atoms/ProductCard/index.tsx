import React from 'react';
import StarRating from '@atoms/StarRating';
import { Product } from '~/types';
import './style.scss';

interface Props {
  product: Product;
  onClick: () => void;
}

const ProductCard = (props: Props) => {
  const { product, onClick } = props;
  const { name, numReviews, thumbnailImage, salePrice } = product;

  return (
    <div className="product_card" onClick={onClick}>
      <img src={thumbnailImage} alt={name} />
      <div className="product_card_info">
        <h3>{name}</h3>
        <div className="product_review_info">
          <StarRating rating={4} />
          <span className="product_review_counts">{numReviews} reviews </span>
        </div>
        <div className="product_price"> $ {salePrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
