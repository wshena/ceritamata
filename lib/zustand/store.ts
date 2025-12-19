import { create } from 'zustand'

export const useUtilityStore = create<UtilityStore>((set) => ({
  isMenuOpen: false,
  
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  
  closeMenu: () => set({ isMenuOpen: false }),
}))

interface CarouselState {
  currentIndex: number;
  itemsPerView: number;
  scrollBy: number;
  isTransitioning: boolean;
  setCurrentIndex: (index: number) => void;
  setItemsPerView: (items: number) => void;
  setScrollBy: (scroll: number) => void;
  setIsTransitioning: (transitioning: boolean) => void;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  currentIndex: 0,
  itemsPerView: 4,
  scrollBy: 1,
  isTransitioning: false,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setItemsPerView: (items) => set({ itemsPerView: items }),
  setScrollBy: (scroll) => set({ scrollBy: scroll }),
  setIsTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
}));