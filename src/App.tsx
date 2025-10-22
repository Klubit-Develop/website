import { useEffect } from 'react';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WhatIsKlubit from './components/WhatIsKlubit';
import StatsSection from './components/StatsSection';
import FeaturesKlubs from './components/FeaturesKlubs';
import FeaturesRRPPs from './components/FeaturesRRPPs';
import FeaturesEvents from './components/FeaturesEvents';
import FeaturesCustomers from './components/FeaturesCustomers';
import LargeImageSection from './components/LargeImageSection';
import AdvantagesSection from './components/AdvantagesSection';
import Form from './components/Form';
import Footer from './components/Footer';

import { useNavigationStore } from './stores/useNavigationStore';
import './locales/i18n';

import './assets/fonts/HelveticaNowDisplay.css';
import SEOHead from './components/SEOHead';

function App() {
  const { isDropdownOpen, closeDropdown } = useNavigationStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Solo cerramos si el dropdown está abierto
      if (!isDropdownOpen) return;

      const target = event.target as HTMLElement;

      // Verificamos si el clic fue dentro del dropdown o del botón de toggle
      const isClickInsideDropdown = target.closest('.dropdown-menu-container');
      const isClickOnToggleButton = target.closest('.dropdown-toggle-button');

      // Si no fue en ninguno de los dos, cerramos
      if (!isClickInsideDropdown && !isClickOnToggleButton) {
        closeDropdown();
      }
    };

    // Agregar el listener al documento
    document.addEventListener('click', handleClickOutside);

    // Cleanup al desmontar
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen, closeDropdown]);

  return (
    <>
      <SEOHead />
      <div style={{ backgroundColor: '#000000' }} className="text-white min-h-screen">
        <Navigation />
        <HeroSection />
        <WhatIsKlubit />
        <StatsSection />
        <FeaturesKlubs />
        <FeaturesRRPPs />
        <FeaturesEvents />
        <FeaturesCustomers />
        <LargeImageSection />
        <AdvantagesSection />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;