import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import AnimatedSection from '../common/AnimatedSection';
import discoBackground from '../../assets/images/brands/disco.jpg';

function LargeImageSection() {

    const navigate = useNavigate();

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }
        }
    };

    return (
        <section className="pt-20">
            <div className="w-full relative">
                <AnimatedSection variants={scaleIn}>
                    <img
                        src={discoBackground}
                        alt="Club experience"
                        className="w-full max-h-[300px] object-cover"
                    />
                    <div 
                        className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8"
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <h2 
                            className="max-w-4xl mb-4"
                            style={{
                                color: '#E5FF88',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display"',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}
                        >
                            Activa tu marca en Klubit y mide, por fin, el retorno de tus acciones.
                        </h2>
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
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contáctanos
                        </motion.button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default LargeImageSection;