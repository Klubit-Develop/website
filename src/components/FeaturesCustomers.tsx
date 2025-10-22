import { type Variants } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import feature04 from '../assets/feature04-home.jpg';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function FeaturesCustomers() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24">
            <div className="w-full max-w-6xl mx-auto">
                <AnimatedSection variants={fadeIn}>
                    <div className="border border-[#F3F3F4]/20 rounded-3xl overflow-hidden" style={{ backgroundColor: '#000000' }}>
                        <div className="grid md:grid-cols-2 gap-0 items-stretch">
                            <div className="relative h-full min-h-[200px] md:min-h-[280px] max-h-[420px] order-2 md:order-1">
                                <img
                                    src={feature04}
                                    alt="Rewards"
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
                                    Para tus clientes
                                </p>
                                <h3 className="mb-6" style={{
                                    color: '#FF336D',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '32px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '42px'
                                }}>
                                    Reserva, paga, gana puntos y accede a beneficios únicos
                                </h3>
                                <p style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    Lleva tu club al siguiente nivel en tu aplicación de KLUBR automatiza reservas y gana de la fidelización.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default FeaturesCustomers;