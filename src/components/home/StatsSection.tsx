import { motion, type Variants } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
};

function StatsSection() {
    return (
        <section 
            className="py-20 px-8 sm:px-12 lg:px-24 relative"
            style={{
                background: '#0C141B'
            }}
        >
            <div className="w-full max-w-7xl mx-auto text-center">
                <AnimatedSection variants={fadeInUp}>
                    <h3 
                        style={{ 
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '42px',
                            marginBottom: '16px'
                        }}
                    >
                        El sector pide cambios, Klubit tiene la solución
                    </h3>
                </AnimatedSection>

                <AnimatedSection variants={staggerContainer}>
                    <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                        <motion.div variants={scaleIn}>
                            <AnimatedCounter value="20" />
                            <div style={{ 
                                color: '#F3F3F4', 
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                Ahorro medio
                            </div>
                        </motion.div>
                        <motion.div variants={scaleIn}>
                            <AnimatedCounter value="30" />
                            <div style={{ 
                                color: '#F3F3F4', 
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                Reducción 'No-show'
                            </div>
                        </motion.div>
                        <motion.div variants={scaleIn}>
                            <AnimatedCounter value="40" />
                            <div style={{ 
                                color: '#F3F3F4', 
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                ROI publicitario
                            </div>
                        </motion.div>
                        <motion.div variants={scaleIn}>
                            <AnimatedCounter value="70" />
                            <div style={{ 
                                color: '#F3F3F4', 
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                Locales sin digitalizar
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default StatsSection;