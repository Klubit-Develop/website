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
                        Una experiencia única que acaba de empezar
                    </h3>
                    <h2 className="mb-8" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Sé de los primeros en disfrutar Klubit
                    </h2>
                    <p className="mb-8" style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display"',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        Forma parte de los primeros usuarios que tendrán acceso a la mejor comunidad de ocio del mundo.
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
                        Descarga la App
                    </motion.button>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default CTA;