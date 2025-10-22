import { create } from 'zustand';

interface NavigationState {
  isMenuOpen: boolean;
  isDropdownOpen: boolean;
  isClosing: boolean;
  
  // Actions
  toggleMenu: () => void;
  closeMenu: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  isMenuOpen: false,
  isDropdownOpen: false,
  isClosing: false,

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  
  closeMenu: () => set({ isMenuOpen: false }),

  openDropdown: () => set({ isDropdownOpen: true, isClosing: false }),

  closeDropdown: () => {
    set({ isClosing: true });
    setTimeout(() => {
      set({ isDropdownOpen: false, isClosing: false });
    }, 300);
  },

  toggleDropdown: () => {
    const { isDropdownOpen, closeDropdown, openDropdown } = get();
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  },
}));