'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import CarouselButton from './CarouselButton';
import { useCarouselStore } from '@/lib/zustand/store';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  scrollBy?: number;
  slideWidth?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infinite?: boolean;
  showDots?: boolean;
  showButtons?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = 4,
  scrollBy = 1,
  slideWidth = 300,
  gap = 16,
  autoPlay = false,
  autoPlayInterval = 5000,
  infinite = true,
  showDots = true,
  showButtons = true,
  className = '',
}) => {
  const {
    currentIndex,
    isTransitioning,
    setCurrentIndex,
    setItemsPerView,
    setScrollBy,
    setIsTransitioning,
  } = useCarouselStore();

  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Inisialisasi dan setup infinite items
  useEffect(() => {
    if (children.length === 0) return;

    setItemsPerView(itemsPerView);
    setScrollBy(scrollBy);
    setTotalItems(children.length);

    // Untuk infinite carousel, kita duplikasi item di awal dan akhir
    if (infinite && children.length > 0) {
      const startItems = children.slice(-itemsPerView);
      const endItems = children.slice(0, itemsPerView);
      const duplicatedItems = [...startItems, ...children, ...endItems];
      setItems(duplicatedItems);
      // Set index awal ke posisi yang benar (setelah item duplikat awal)
      setCurrentIndex(itemsPerView);
    } else {
      setItems(children);
    }
  }, [children, itemsPerView, scrollBy, infinite, setItemsPerView, setScrollBy, setCurrentIndex]);

  // Auto play functionality
  useEffect(() => {
    if (autoPlay && !isTransitioning) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isTransitioning]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    
    // Reset ke posisi asli untuk infinite scroll
    if (infinite && items.length > 0 && children.length > 0) {
      if (currentIndex >= children.length + itemsPerView) {
        // Jika di akhir (item duplikat), reset ke awal tanpa animasi
        carouselRef.current?.style.setProperty('transition', 'none');
        setCurrentIndex(itemsPerView);
        setTimeout(() => {
          carouselRef.current?.style.removeProperty('transition');
        }, 50);
      } else if (currentIndex < itemsPerView) {
        // Jika di awal (item duplikat), reset ke akhir tanpa animasi
        carouselRef.current?.style.setProperty('transition', 'none');
        setCurrentIndex(children.length);
        setTimeout(() => {
          carouselRef.current?.style.removeProperty('transition');
        }, 50);
      }
    }
  }, [currentIndex, infinite, items.length, children.length, itemsPerView, setIsTransitioning, setCurrentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = currentIndex - scrollBy;
    
    if (!infinite && newIndex < 0) {
      setCurrentIndex(0);
      setIsTransitioning(false);
      return;
    }
    
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = currentIndex + scrollBy;
    
    if (!infinite && newIndex > totalItems - itemsPerView) {
      setCurrentIndex(totalItems - itemsPerView);
      setIsTransitioning(false);
      return;
    }
    
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (!infinite) {
      if (index < 0) index = 0;
      if (index > totalItems - itemsPerView) index = totalItems - itemsPerView;
    }
    
    setCurrentIndex(index + (infinite ? itemsPerView : 0));
  };

  // Hitung offset slide
  const getOffset = () => {
    if (items.length === 0) return 0;
    return -currentIndex * (slideWidth + gap);
  };

  // Cek jika tombol disabled
  const isPrevDisabled = !infinite && currentIndex <= 0;
  const isNextDisabled = !infinite && currentIndex >= totalItems - itemsPerView;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${getOffset()}px)`,
            gap: `${gap}px`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{ width: `${slideWidth}px` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {showButtons && items.length > itemsPerView && (
        <div className="w-full flex items-center justify-center md:items-start md:justify-start">
          <div className='mt-5 md:mt-10 flex items-center'>
            <CarouselButton
              direction="prev"
              onClick={handlePrev}
              disabled={isPrevDisabled}
            />
            <CarouselButton
              direction="next"
              onClick={handleNext}
              disabled={isNextDisabled}
            />
          </div>
        </div>
      )}

      {showDots && children.length > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(totalItems / scrollBy) }).map((_, index) => {
            const isActive = infinite
              ? (currentIndex - itemsPerView) >= index * scrollBy && 
                (currentIndex - itemsPerView) < (index + 1) * scrollBy
              : currentIndex >= index * scrollBy && 
                currentIndex < (index + 1) * scrollBy;
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(index * scrollBy)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;