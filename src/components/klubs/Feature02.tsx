import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

import AnimatedSection from '../../components/common/AnimatedSection';
import feauture02 from '../../assets/images/klubs/feauture02.jpg';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
};

function Feature02() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24 bg-black">
            <AnimatedSection variants={fadeInUp}>
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '20px',
                                border: '1px solid #303030',
                                background: 'rgba(4, 4, 4, 0.40)',
                                backdropFilter: 'blur(12.5px)',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                        >
                            <img
                                src={feauture02}
                                alt="Conoce a tus clientes y aumenta su recurrencia"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="lg:col-span-5" style={{
                            borderRadius: '20px',
                            border: '1px solid #303030',
                            background: 'rgba(4, 4, 4, 0.40)',
                            backdropFilter: 'blur(12.5px)',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <h2 className="mb-6" style={{
                                color: '#FF336D',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '42px'
                            }}>
                                Conoce a tus clientes y aumenta su recurrencia
                            </h2>
                            <p className="mb-5" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                Accede a datos en tiempo real sobre tus clientes y adapta tu oferta a sus gustos.
                            </p>
                            <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                                <li className="flex items-start" style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    <Check style={{ marginRight: '12px', color: '#E5FF88', minWidth: '24px', marginTop: '2px' }} size={24} />
                                    <span>Descubre quiénes son tus usuarios más fieles.</span>
                                </li>
                                <li className="flex items-start" style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    <Check style={{ marginRight: '12px', color: '#E5FF88', minWidth: '24px', marginTop: '2px' }} size={24} />
                                    <span>Identifica patrones de consumo y preferencias.</span>
                                </li>
                                <li className="flex items-start" style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    <Check style={{ marginRight: '12px', color: '#E5FF88', minWidth: '24px', marginTop: '2px' }} size={24} />
                                    <span>Diseña tus acciones personalizadas que los hagan repetir.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default Feature02;