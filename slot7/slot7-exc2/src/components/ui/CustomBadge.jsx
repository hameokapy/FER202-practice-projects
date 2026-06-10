import React from 'react';
import { Badge } from 'react-bootstrap';

export const CustomBadge = ({ children, variant = 'primary', className = '' }) => {
  const bgColors = {
    success: 'success', // màu xanh lá
    secondary: 'secondary', // màu xám
    default: 'primary' // màu xanh dương mặc định
  };

  return (
    <Badge bg={bgColors[variant] || bgColors.default} className={`fw-normal px-3 py-2 rounded-pill ${className}`}>
      {children}
    </Badge>
  );
};