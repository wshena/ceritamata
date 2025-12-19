import { create } from 'zustand'

export const useUtilityStore = create<UtilityStore>((set) => ({
  isMenuOpen: false,
  
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  
  closeMenu: () => set({ isMenuOpen: false }),
}))