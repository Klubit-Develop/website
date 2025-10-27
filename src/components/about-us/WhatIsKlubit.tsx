import { type Variants } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  }
};

function WhatIsKlubit() {
  return (
    <section className="py-20 px-8 sm:px-12 lg:px-24">
      <AnimatedSection variants={fadeInUp}>
        <div className="w-full max-w-6xl">
          <p className="mb-4" style={{
            color: '#E5FF88',
            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal'
          }}>
            Un Saas revolucionario
          </p>
          <h2 className="mb-6" style={{
            color: '#FF336D',
            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '42px'
          }}>
            ¿Qué es Klubit?
          </h2>
          <p style={{
            color: '#ECF0F5',
            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
          }}>
            Klubit no es simplemente un sistema de venta de entradas; es un ecosistema de ocio nocturno integrado. Nuestra plataforma está diseñada para fomentar el crecimiento a través de una comunidad activa que incluye tanto relaciones públicas cómo usuarios con redes de contacto propias. Potenciamos la autonomía del usuario proporcionando un viaje único en la gestión de su escenario nocturno.
            <br /><br />
            Al conectar a todos los interesados, facilitamos una relación simbiótica que enriquece cada noche a través de un programa de fidelización que reconoce a los usuarios.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default WhatIsKlubit;