import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SEOHead from './components/common/SEOHead';
import ScrollToTop from './components/common/ScrollToTop';

import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Klubs from './pages/Klubs';
import Users from './pages/Users';
import Rrpps from './pages/Rrpps';
import Brands from './pages/Brands';
import Contact from './pages/Contact';

import { useNavigationStore } from './stores/useNavigationStore';
import './assets/fonts/HelveticaNowDisplay.css';
import './locales/i18n';

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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="klubs" element={<Klubs />} />
            <Route path="users" element={<Users />} />
            <Route path="rrpps" element={<Rrpps />} />
            <Route path="brands" element={<Brands />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;