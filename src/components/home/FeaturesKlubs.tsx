import { type Variants } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import feature01 from '../../assets/images/home/feature01.jpg';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function FeaturesKlubs() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24">
            <div className="w-full max-w-6xl mx-auto">
                <AnimatedSection variants={fadeIn}>
                    <div className="overflow-hidden" style={{ backgroundColor: '#000000', borderRadius: '20px', border: '2px solid #303030' }}>
                        <div className="grid md:grid-cols-2 gap-0 items-stretch">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <p className="mb-4 text-[20px] md:text-[24px]" style={{
                                    color: '#E5FF88',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}>
                                    Para los Klubs
                                </p>
                                <h3 className="mb-4 md:mb-6 text-[24px] leading-8 md:text-[32px] md:leading-[42px]" style={{
                                    color: '#FF336D',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 500
                                }}>
                                    Gestiona reservas, eventos, entradas y clientes con IA.
                                </h3>
                                <p className='text-[16px] md:text-[18px]' style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    Organiza eventos, conecta con tu audiencia y fideliza clientes desde una sola plataforma. Más control, más ingresos, menos esfuerzo.
                                </p>
                            </div>
                            <div className="relative h-full min-h-[200px] md:min-h-[280px] max-h-[420px]">
                                <img
                                    src={feature01}
                                    alt="Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default FeaturesKlubs;