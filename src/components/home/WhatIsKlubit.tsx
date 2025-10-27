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
        <div className="w-full max-w-6xl mx-auto">
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
            Klubit es la primera plataforma de ocio con IA nativa que ayuda a locales, RRPPs, usuarios y marcas a conectarse, ganar más y ofrecer mejores experiencias. Con KlaudIA, tu asistente inteligente, puedes gestionar tu local, activar campañas o encontrar eventos.{' '}
            <a 
              href="#" 
              className="underline hover:no-underline transition"
              style={{ color: '#ECF0F5' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
            >
              Saber más
            </a>
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default WhatIsKlubit;