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
                        Founding Sponsors
                    </h3>
                    <h2 className="mb-8" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Sé uno de los primeros en transformar la industria con Klubit
                    </h2>
                    <p className="mb-8" style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        Conviértete en Founding Sponsor y accede a beneficios exclusivos para tu marca.
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
                            <span>Presencia destacada en la plataforma desde el inicio.</span>
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
                            <span>Condiciones preferenciales en tarifas y activaciones.</span>
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
                            <span>Acceso prioritario a nuevas funcionalidades y formatos.</span>
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
                            }}>4</span>
                            <span>Asociación de tu marca con la innovación y la transformación del sector.</span>
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
                        Contáctanos y descubre cómo ser Founding Sponsor de Klubit.
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
                    >
                        Contáctanos
                    </motion.button>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default CTA;