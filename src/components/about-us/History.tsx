import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';

import Historia01 from '../../assets/images/about-us/historia01.png';
import Historia02 from '../../assets/images/about-us/historia02.jpg';
import Historia03 from '../../assets/images/about-us/historia03.jpg';
import Historia04 from '../../assets/images/about-us/historia04.jpg';
import Historia05 from '../../assets/images/about-us/historia05.jpg';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function History() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const historyItems = [
        { title: 'El comienzo', image: Historia01 },
        { title: 'El concepto', image: Historia02 },
        { title: 'El equipo', image: Historia03 },
        { title: 'El desafío', image: Historia04 },
        { title: 'La Visión', image: Historia05 }
    ];

    const handleScroll = (direction: 'left' | 'right') => {
        const container = document.getElementById('history-carousel');
        if (!container) return;

        const scrollAmount = 400;
        const newPosition = direction === 'left' 
            ? container.scrollLeft - scrollAmount 
            : container.scrollLeft + scrollAmount;
        
        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    };

    return (
        <section className="py-16 px-8 sm:px-12 lg:px-24">
            <AnimatedSection variants={fadeIn}>
                <div className="max-w-[1600px] mx-auto">
                    <p className="mb-4" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Cómo empezó todo
                    </p>
                    <h2 className="mb-12" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '36px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '44px'
                    }}>
                        Nuestra historia
                    </h2>

                    {/* Contenedor del carrusel */}
                    <div className="relative">
                        {/* Carrusel scrollable */}
                        <div
                            id="history-carousel"
                            className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {historyItems.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="group cursor-pointer overflow-hidden flex-shrink-0 snap-center"
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        width: 'calc(100vw - 80px)',
                                        maxWidth: '380px',
                                        height: '520px',
                                        padding: '36px 36px 72px 36px',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end',
                                        borderRadius: '20px',
                                        border: '2px solid #3E3E3E',
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Imagen de fondo con animación */}
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: `url(${item.image}) lightgray 50% / cover no-repeat`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: '20px',
                                        }}
                                        whileHover={{
                                            scale: 1.08,
                                            transition: { duration: 0.4, ease: 'easeOut' }
                                        }}
                                    />

                                    {/* Gradiente overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(0deg, rgba(4, 4, 4, 0.00) 0%, rgba(4, 4, 4, 0.50) 100%)',
                                            borderRadius: '20px',
                                        }}
                                    />

                                    {/* Título en la parte superior izquierda */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '36px',
                                        left: '36px',
                                        zIndex: 10
                                    }}>
                                        <h3 style={{
                                            color: '#E5FF88',
                                            textShadow: '0 0 5px rgba(0, 0, 0, 0.50)',
                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '32px',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: '42px'
                                        }}>
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Badge "Ver más" alineado a la derecha abajo */}
                                    <div
                                        className="px-4 py-2 transition-transform duration-300 group-hover:scale-105"
                                        style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            right: '20px',
                                            borderRadius: '20px',
                                            border: '1.5px solid #3E3E3E',
                                            background: 'rgba(4, 4, 4, 0.40)',
                                            backdropFilter: 'blur(2.5px)',
                                            overflow: 'hidden',
                                            color: '#ECF0F5',
                                            textOverflow: 'ellipsis',
                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: 'normal',
                                            zIndex: 10
                                        }}
                                    >
                                        Ver más
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Botones de navegación - Debajo a la derecha en desktop */}
                        <div className="hidden lg:flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => handleScroll('left')}
                                className="flex w-12 h-12 items-center justify-center rounded-full bg-[#1a1a1a] border border-[#3E3E3E] hover:bg-[#2a2a2a] transition-all"
                                aria-label="Anterior"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ECF0F5" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            
                            <button
                                onClick={() => handleScroll('right')}
                                className="flex w-12 h-12 items-center justify-center rounded-full bg-[#1a1a1a] border border-[#3E3E3E] hover:bg-[#2a2a2a] transition-all"
                                aria-label="Siguiente"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ECF0F5" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default History;