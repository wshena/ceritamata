import { AngleLeftIcon, AngleRightIcon } from '@/icons';
import React from 'react';

interface CarouselButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  className = '',
}) => {
  const Icon = direction === 'prev' ? <AngleLeftIcon size={25} color='white' /> : <AngleRightIcon size={25} color='white' />;
  const baseClasses = `
    transition-all duration-300 
    active:scale-95 
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
    p-2 rounded-full bg-none hover:bg-white/20
    ${className}
  `;
  
  const positionClasses = direction === 'prev' 
    ? 'left-2 md:-left-6' 
    : 'right-2 md:-right-6';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses}`}
      aria-label={`Slide ${direction}`}
    >
      {Icon}
    </button>
  );
};

export default CarouselButton;