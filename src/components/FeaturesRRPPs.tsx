import { type Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import feature02 from '../assets/feature02-home.jpg';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function FeaturesRRPPs() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24">
            <div className="w-full max-w-6xl mx-auto">
                <AnimatedSection variants={fadeIn}>
                    <div className="border border-[#F3F3F4]/20 rounded-3xl overflow-hidden" style={{ backgroundColor: '#000000' }}>
                        <div className="grid md:grid-cols-2 gap-0 items-stretch">
                            <div className="relative h-full min-h-[200px] md:min-h-[280px] max-h-[420px] order-2 md:order-1">
                                <img
                                    src={feature02}
                                    alt="Community"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                                <p className="mb-4" style={{
                                    color: '#E5FF88',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}>
                                    Para los RRPPs
                                </p>
                                <h3 className="mb-6" style={{
                                    color: '#FF336D',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '32px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '42px'
                                }}>
                                    Conecta con tu comunidad. Fideliza, automatiza y gana.
                                </h3>
                                <p style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    Gestiona clientes, crece en visibilidad y genera ingresos con herramientas que hacen tu trabajo más fácil y efectivo.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default FeaturesRRPPs;