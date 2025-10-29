import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import AnimatedSection from '../../components/common/AnimatedSection';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function CTA() {
    const navigate = useNavigate();

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
                        Una plataforma creada para revolucionar la forma en que gestionas tu negocio
                    </h3>
                    <h2 className="mb-8" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Sé de los primeros en transformar tu gestión
                    </h2>
                    <p className="mb-8" style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        Únete a los primeros clubs y promotores que ya están liderando la transformación con Klubit.
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
                            <span>Acceso a funcionalidades avanzadas en primicia.</span>
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
                            <span>Condiciones especiales para los primeros clientes.</span>
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
                            <span>Posición de ventaja frente a otros clubs del sector.</span>
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
                        Contáctanos y empieza hoy a transformar tu club con Klubit.
                    </p>
                    <motion.button
                        className="w-full md:w-auto px-8 py-3 transition-all duration-300"
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
                        onClick={() => navigate('/contacts')}
                    >
                        Contáctanos
                    </motion.button>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default CTA;