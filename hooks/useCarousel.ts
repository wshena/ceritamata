import { useState, useCallback, useRef, useEffect } from 'react';
import { useCarouselStore } from '@/lib/zustand/store';

interface UseCarouselProps {
  itemsCount: number;
  itemsPerView?: number;
  scrollBy?: number;
  infinite?: boolean;
}

interface UseCarouselReturn {
  currentIndex: number;
  isTransitioning: boolean;
  items: number[];
  totalItems: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  goToSlide: (index: number) => void;
  getDisplayItems: () => number[];
}

export const useCarousel = ({
  itemsCount,
  itemsPerView = 4,
  scrollBy = 1,
  infinite = true,
}: UseCarouselProps): UseCarouselReturn => {
  const {
    currentIndex,
    isTransitioning,
    setCurrentIndex,
    setIsTransitioning,
  } = useCarouselStore();

  const [totalItems, setTotalItems] = useState(itemsCount);
  const [items, setItems] = useState<number[]>([]);
  const initializedRef = useRef(false);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Inisialisasi items
  useEffect(() => {
    if (itemsCount === 0 || initializedRef.current) return;

    setTotalItems(itemsCount);

    // Generate array index untuk items
    const originalItems = Array.from({ length: itemsCount }, (_, i) => i);

    if (infinite && itemsCount > 0) {
      const startItems = originalItems.slice(-itemsPerView);
      const endItems = originalItems.slice(0, itemsPerView);
      const duplicatedItems = [...startItems, ...originalItems, ...endItems];
      setItems(duplicatedItems);
      
      // Set index awal hanya jika benar-benar 0
      if (currentIndex === 0) {
        setCurrentIndex(itemsPerView);
      }
    } else {
      setItems(originalItems);
    }

    initializedRef.current = true;
  }, [itemsCount, infinite, itemsPerView, currentIndex, setCurrentIndex]);

  // Reset initialized ref jika itemsCount berubah
  useEffect(() => {
    initializedRef.current = false;
  }, [itemsCount]);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const handlePrev = useCallback(() => {
    console.log('handlePrev called', { isTransitioning, currentIndex });
    if (isTransitioning) {
      console.log('Currently transitioning, skipping');
      return;
    }
    
    console.log('Setting transitioning to true');
    setIsTransitioning(true);
    
    const newIndex = currentIndex - scrollBy;
    console.log('New index:', newIndex);
    
    if (!infinite && newIndex < 0) {
      console.log('Non-infinite mode, reached beginning');
      setCurrentIndex(0);
      // Auto-reset transitioning setelah timeout kecil
      transitionTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return;
    }
    
    console.log('Setting new index:', newIndex);
    setCurrentIndex(newIndex);
    
    // Auto-reset transitioning setelah animasi selesai
    transitionTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
      console.log('Transition completed');
    }, 500);
  }, [
    currentIndex,
    isTransitioning,
    infinite,
    scrollBy,
    setIsTransitioning,
    setCurrentIndex,
  ]);

  const handleNext = useCallback(() => {
    console.log('handleNext called', { isTransitioning, currentIndex });
    if (isTransitioning) {
      console.log('Currently transitioning, skipping');
      return;
    }
    
    console.log('Setting transitioning to true');
    setIsTransitioning(true);
    
    const newIndex = currentIndex + scrollBy;
    console.log('New index:', newIndex);
    
    if (!infinite && newIndex > totalItems - itemsPerView) {
      console.log('Non-infinite mode, reached end');
      setCurrentIndex(totalItems - itemsPerView);
      // Auto-reset transitioning setelah timeout kecil
      transitionTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return;
    }
    
    console.log('Setting new index:', newIndex);
    setCurrentIndex(newIndex);
    
    // Auto-reset transitioning setelah animasi selesai
    transitionTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
      console.log('Transition completed');
    }, 500);
  }, [
    currentIndex,
    isTransitioning,
    infinite,
    scrollBy,
    itemsPerView,
    totalItems,
    setIsTransitioning,
    setCurrentIndex,
  ]);

  const goToSlide = useCallback((index: number) => {
    console.log('goToSlide called', { index, isTransitioning });
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (!infinite) {
      if (index < 0) index = 0;
      if (index > totalItems - itemsPerView) index = totalItems - itemsPerView;
    }
    
    const newIndex = index + (infinite ? itemsPerView : 0);
    console.log('Setting index to:', newIndex);
    setCurrentIndex(newIndex);
    
    // Auto-reset transitioning setelah animasi selesai
    transitionTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [
    isTransitioning,
    infinite,
    totalItems,
    itemsPerView,
    setIsTransitioning,
    setCurrentIndex,
  ]);

  // Cek jika tombol disabled
  const isPrevDisabled = !infinite && currentIndex <= 0;
  const isNextDisabled = !infinite && currentIndex >= totalItems - itemsPerView;

  // Fungsi untuk mendapatkan items yang sedang ditampilkan
  const getDisplayItems = useCallback(() => {
    const displayIndices: number[] = [];
    const startIndex = currentIndex;
    const endIndex = Math.min(currentIndex + itemsPerView, items.length);
    
    for (let i = startIndex; i < endIndex; i++) {
      if (items[i] !== undefined) {
        displayIndices.push(items[i]);
      }
    }
    
    return displayIndices;
  }, [currentIndex, itemsPerView, items]);

  return {
    currentIndex,
    isTransitioning,
    items,
    totalItems,
    isPrevDisabled,
    isNextDisabled,
    handlePrev,
    handleNext,
    goToSlide,
    getDisplayItems,
  };
};