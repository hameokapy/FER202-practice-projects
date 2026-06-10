import React from 'react';
import { Image } from 'react-bootstrap';

export const PlantGallery = ({ imageUrl, altText }) => {
  return (
    <div className="bg-body-secondary rounded-4 overflow-hidden shadow-sm h-100 d-flex align-items-center">
      <Image 
        src={imageUrl} 
        alt={altText} 
        fluid 
        className="w-100" 
        style={{ minHeight: '400px', maxHeight: '600px' }}
      />
    </div>
  );
};