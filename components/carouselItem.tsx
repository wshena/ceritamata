import React from 'react';

const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden
        transition-all duration-300 
        cursor-pointer
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CarouselItem;