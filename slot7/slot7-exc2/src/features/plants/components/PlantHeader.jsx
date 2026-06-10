import React from 'react';
import { CustomBadge } from '../../../components/ui/CustomBadge';

export const PlantHeader = ({ name, scientificName, difficulty, tags, description }) => {
  return (
    <div className="mb-4">
      <div className="mb-3">
        <CustomBadge variant="success" className="text-uppercase fw-bold bg-success bg-opacity-25 text-success">
          {difficulty}
        </CustomBadge>
      </div>
      <h1 className="display-5 fw-bold mb-1">{name}</h1>
      <p className="fs-5 fst-italic text-muted mb-3">{scientificName}</p>
      
      <div className="d-flex flex-wrap gap-2 mb-3">
        {tags.map((tag, idx) => (
          <CustomBadge key={idx} variant="secondary" className="bg-secondary bg-opacity-10 text-secondary">
            {tag}
          </CustomBadge>
        ))}
      </div>
      
      <p className="text-body-secondary lh-lg mb-0">
        {description}
      </p>
    </div>
  );
};