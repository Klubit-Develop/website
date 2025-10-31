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
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

    const historyItems = [
        { 
            title: 'El comienzo', 
            image: Historia01,
            content: 'Lo que nació como una conversación entre amigos se convirtió en una misión para revolucionar la forma en que vivimos la noche.'
        },
        { 
            title: 'El concepto', 
            image: Historia02,
            content: 'Klubit no es solo una plataforma, es una comunidad. Un lugar donde usuarios, locales, RRPPs y marcas se encuentran para crear experiencias memorables, impulsadas por la tecnología y la creatividad.'
        },
        { 
            title: 'El equipo', 
            image: Historia03,
            content: 'Somos un grupo de jóvenes con una visión clara: transformar el ocio con inteligencia artificial, pero sin perder la esencia de lo humano: la conexión, la emoción y la diversión.'
        },
        { 
            title: 'El desafío', 
            image: Historia04,
            content: 'La industria del ocio llevaba años atrapada en el pasado. Nuestro reto es claro: digitalizar, optimizar y personalizar cada interacción para que cada salida, cada evento y cada momento cuente más.'
        },
        { 
            title: 'La Visión', 
            image: Historia05,
            content: 'Creemos en un futuro donde el ocio esté en nuestras manos, donde cada experiencia sea única y cada persona se sienta parte de algo más grande. Ese futuro ya está aquí, y se llama Klubit.'
        }
    ];

    const toggleCard = (index: number) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

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
                            {historyItems.map((item, index) => {
                                const isExpanded = expandedCards.has(index);
                                
                                return (
                                    <motion.div
                                        key={item.title}
                                        className="group overflow-hidden shrink-0 snap-center"
                                        layout
                                        style={{
                                            position: 'relative',
                                            display: 'flex',
                                            width: 'calc(100vw - 80px)',
                                            maxWidth: '380px',
                                            minHeight: '520px',
                                            padding: '36px',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            borderRadius: '20px',
                                            border: '2px solid #3E3E3E',
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                            duration: 0.6, 
                                            delay: index * 0.1 
                                        }}
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
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                borderRadius: '20px',
                                            }}
                                            animate={{
                                                background: isExpanded 
                                                    ? 'linear-gradient(0deg, rgba(4, 4, 4, 0.95) 0%, rgba(4, 4, 4, 0.70) 100%)'
                                                    : 'linear-gradient(0deg, rgba(4, 4, 4, 0.00) 0%, rgba(4, 4, 4, 0.50) 100%)',
                                            }}
                                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                        />

                                        {/* Contenedor superior con título */}
                                        <div style={{
                                            position: 'relative',
                                            zIndex: 10,
                                            width: '100%'
                                        }}>
                                            <h3 style={{
                                                color: '#E5FF88',
                                                textShadow: '0 0 5px rgba(0, 0, 0, 0.50)',
                                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                fontSize: '32px',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '42px',
                                                marginBottom: isExpanded ? '24px' : '0'
                                            }}>
                                                {item.title}
                                            </h3>

                                            {/* Contenido expandido */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    opacity: isExpanded ? 1 : 0,
                                                    height: isExpanded ? 'auto' : 0,
                                                    marginTop: isExpanded ? '24px' : 0,
                                                }}
                                                transition={{ 
                                                    duration: 0.5, 
                                                    ease: [0.4, 0, 0.2, 1],
                                                    opacity: { duration: 0.3, delay: isExpanded ? 0.2 : 0 }
                                                }}
                                                style={{
                                                    overflow: 'hidden',
                                                    width: '100%'
                                                }}
                                            >
                                                <p style={{
                                                    color: '#ECF0F5',
                                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                    fontSize: '18px',
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '28px',
                                                    textAlign: 'left',
                                                    margin: 0
                                                }}>
                                                    {item.content}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Badge "Ver más/Ver menos" con funcionalidad */}
                                        <button
                                            onClick={() => toggleCard(index)}
                                            className="px-4 py-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
                                            style={{
                                                position: 'relative',
                                                alignSelf: 'flex-end',
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
                                                zIndex: 10,
                                                marginTop: isExpanded ? '36px' : 'auto'
                                            }}
                                        >
                                            {isExpanded ? 'Ver menos' : 'Ver más'}
                                        </button>
                                    </motion.div>
                                );
                            })}
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