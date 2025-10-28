import { motion, type Variants } from 'framer-motion';

import AnimatedSection from '../../components/common/AnimatedSection';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function CTA() {
    return (
        <section className="py-32 px-8 sm:px-12 lg:px-24" style={{ backgroundColor: '#0C141B' }}>
            <AnimatedSection variants={fadeIn}>
                <div className="max-w-[1600px] mx-auto">
                    <h3 className="mb-6" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Klubit Ambassadors
                    </h3>
                    <h2 className="mb-8" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Gana más compartiendo Klubit
                    </h2>
                    <p className="mb-8" style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        Conviértete en embajador y ayuda a expandir Klubit en tu red de clubs y RRPPs. Cada vez que alguien empiece a usar la plataforma gracias a ti, tú también ganas.
                    </p>
                    <ul className="mb-8 space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                        <li className="flex items-start" style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}>
                            <span style={{
                                marginRight: '16px',
                                color: '#98AAC0',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>1</span>
                            <span>Regístrate en el programa de embajadores.</span>
                        </li>
                        <li className="flex items-start" style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}>
                            <span style={{
                                marginRight: '16px',
                                color: '#98AAC0',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>2</span>
                            <span>Obtén ingresos adicionales con revenue sharing y beneficios exclusivos.</span>
                        </li>
                        <li className="flex items-start" style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '18px',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}>
                            <span style={{
                                marginRight: '16px',
                                color: '#98AAC0',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>3</span>
                            <span>Comparte Klubit y forma parte de su crecimiento.</span>
                        </li>
                    </ul>
                    <p className="mb-8" style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        Contáctanos y descubre cómo ser Klubit Ambassador.
                    </p>
                    <motion.button
                        className="px-8 py-3 transition-all duration-300"
                        style={{
                            borderRadius: '10px',
                            background: '#FF336D',
                            color: '#F9F9FA',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'center',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contáctanos
                    </motion.button>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default CTA;