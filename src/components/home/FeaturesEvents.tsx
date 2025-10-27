import { type Variants } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import feature03 from '../../assets/images/home/feature03.jpg';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function FeaturesEvents() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24">
            <div className="w-full max-w-6xl mx-auto">
                <AnimatedSection variants={fadeIn}>
                    <div className="border border-[#F3F3F4]/20 rounded-3xl overflow-hidden" style={{ backgroundColor: '#000000' }}>
                        <div className="grid md:grid-cols-2 gap-0 items-stretch">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <p className="mb-4 text-[20px] md:text-[24px]" style={{
                                    color: '#E5FF88',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}>
                                    Para tus eventos
                                </p>
                                <h3 className="mb-4 md:mb-6 text-[24px] leading-8 md:text-[32px] md:leading-[42px]" style={{
                                    color: '#FF336D',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 500
                                }}>
                                    Activa campañas en tiempo real y mide cada impacto en el punto de compra
                                </h3>
                                <p className='text-[16px] md:text-[18px]' style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    Tu flujo impulsa nuevas interacciones en cada paso del ciclo, impulsando clientes recurrentes en campañas inteligentes desde CRM y Bluetooth.
                                </p>
                            </div>
                            <div className="relative h-full min-h-[200px] md:min-h-[280px] max-h-[420px]">
                                <img
                                    src={feature03}
                                    alt="Events"
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

export default FeaturesEvents;