import { motion, type Variants } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

import Historia04 from '../../assets/images/about-us/historia04.jpg';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function Values() {
    return (
        <section className="relative py-16 px-8 sm:px-12 lg:px-24 overflow-hidden">
            {/* Imagen de fondo */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${Historia04})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            
            {/* Overlay oscuro adicional */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                }}
            />

            <AnimatedSection variants={fadeIn}>
                <div className="relative z-10">
                    <p className="mb-12" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Nuestra razón de ser
                    </p>

                    {/* Misión */}
                    <motion.div 
                        className="mb-8 p-8 md:p-12 rounded-3xl backdrop-blur-md"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-6" style={{
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '42px'
                        }}>
                            Misión
                        </h3>
                        <p style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '28px'
                        }}>
                            Nuestra misión es digitalizar y transformar el ocio nocturno a través de la inteligencia artificial, conectando a clubs, usuarios, RRPPs y marcas en un ecosistema donde todos ganan. Queremos simplificar la gestión, aumentar la rentabilidad y crear experiencias únicas que fidelicen a los clientes y potencien a los locales.
                        </p>
                    </motion.div>

                    {/* Visión */}
                    <motion.div 
                        className="mb-8 p-8 md:p-12 rounded-3xl backdrop-blur-md"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-6" style={{
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '42px'
                        }}>
                            Visión
                        </h3>
                        <p style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '28px'
                        }}>
                            Nuestra visión es liderar la revolución del ocio inteligente a nivel global, convirtiéndonos en la plataforma de referencia para disfrutar, gestionar y monetizar cada experiencia nocturna. Imaginamos un futuro en el que cada salida cuente, cada cliente sea valorado y cada marca pueda medir el impacto real de sus acciones.
                        </p>
                    </motion.div>

                    {/* Valores */}
                    <motion.div 
                        className="p-8 md:p-12 rounded-3xl backdrop-blur-md"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-8" style={{
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display"',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '42px'
                        }}>
                            Valores
                        </h3>
                        <ul className="space-y-6" style={{ listStyle: 'none', padding: 0 }}>
                            <li 
                                className="flex items-start"
                                style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}
                            >
                                <span style={{ 
                                    marginRight: '12px',
                                    flexShrink: 0,
                                    fontSize: '24px',
                                    lineHeight: '1'
                                }}>•</span>
                                <span>Innovación constante. Apostamos por la IA y la tecnología para transformar un sector poco digitalizado.</span>
                            </li>
                            <li 
                                className="flex items-start"
                                style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}
                            >
                                <span style={{ 
                                    marginRight: '12px',
                                    flexShrink: 0,
                                    fontSize: '24px',
                                    lineHeight: '1'
                                }}>•</span>
                                <span>Conexión real. Creemos en unir a personas, locales y marcas en un ecosistema justo y beneficioso para todos.</span>
                            </li>
                            <li 
                                className="flex items-start"
                                style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}
                            >
                                <span style={{ 
                                    marginRight: '12px',
                                    flexShrink: 0,
                                    fontSize: '24px',
                                    lineHeight: '1'
                                }}>•</span>
                                <span>Transparencia y confianza. Entradas seguras, datos protegidos y relaciones claras con cada cliente y partner.</span>
                            </li>
                            <li 
                                className="flex items-start"
                                style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}
                            >
                                <span style={{ 
                                    marginRight: '12px',
                                    flexShrink: 0,
                                    fontSize: '24px',
                                    lineHeight: '1'
                                }}>•</span>
                                <span>Experiencia centrada en el usuario. Diseñamos cada funcionalidad pensando en la simplicidad y el valor para quienes disfrutan la noche.</span>
                            </li>
                            <li 
                                className="flex items-start"
                                style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}
                            >
                                <span style={{ 
                                    marginRight: '12px',
                                    flexShrink: 0,
                                    fontSize: '24px',
                                    lineHeight: '1'
                                }}>•</span>
                                <span>Crecimiento compartido. Klubit solo gana si nuestros usuarios, clubs, RRPPs y marcas ganan primero.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default Values;