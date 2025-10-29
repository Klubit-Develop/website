import { type Variants } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
};

function ContactUs() {
    return (
        <section className="py-10 px-8 sm:px-12 lg:px-24">
            <AnimatedSection variants={fadeInUp}>
                <div className="w-full max-w-6xl">
                    <p className="mb-4" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Contacta con nosotros
                    </p>
                    <h2 className="mb-10" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Estamos a un clic de distancia
                    </h2>
                    <p className='mb-3' style={{
                        color: '#98AAC0',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}>
                        Email
                    </p>
                    <p className='mb-3' style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        info@klubit.io – Escríbenos y te contestaremos en menos de 24h.
                    </p>
                    <p className='mt-10 mb-3' style={{
                        color: '#98AAC0',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}>
                        Teléfono
                    </p>
                    <p style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}>
                        679 980 894 – ¿Prefieres hablar? Llámanos directamente.
                    </p>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default ContactUs;