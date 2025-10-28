import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';

import AnimatedSection from '../../components/common/AnimatedSection';
import feauture03 from '../../assets/images/users/feauture03.png';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
};

function Feature03() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24 bg-black">
            <AnimatedSection variants={fadeInUp}>
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
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
                                Vive experiencias personalizadas con KlaudIA
                            </h2>
                            <p className="mb-5" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                KlaudIA te acompaña para que aproveches cada salida al máximo.
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
                                    <span>Descubre los planes y eventos más afines a tus gustos.</span>
                                </li>
                                <li className="flex items-start" style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    <Check style={{ marginRight: '12px', color: '#E5FF88', minWidth: '24px', marginTop: '2px' }} size={24} />
                                    <span>Recibe recomendaciones basadas en tu estilo de vida.</span>
                                </li>
                                <li className="flex items-start" style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display"',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    <Check style={{ marginRight: '12px', color: '#E5FF88', minWidth: '24px', marginTop: '2px' }} size={24} />
                                    <span>Accede a promociones pensadas solo para ti.</span>
                                </li>
                            </ul>
                        </div>
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: 60 }}
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
                                src={feauture03}
                                alt="Coordina y potencia el trabajo de tus RRPPs"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default Feature03;