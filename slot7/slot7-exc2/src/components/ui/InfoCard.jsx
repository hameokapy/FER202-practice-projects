import React from 'react';
import { Card } from 'react-bootstrap';

export const InfoCard = ({ children, className = '' }) => {
  return (
    <Card className={`border-0 shadow-sm bg-body-tertiary h-100 ${className}`}>
      <Card.Body className="d-flex align-items-center gap-3 p-3">
        {children}
      </Card.Body>
    </Card>
  );
};