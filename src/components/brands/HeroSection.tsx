import { motion } from 'framer-motion';

import heroBackground from '../../assets/images/brands/hero-background.jpg';

function HeroSection() {
    return (
        <section className="relative h-screen flex items-end overflow-hidden">
            <div className="absolute inset-0">
                <motion.img
                    src={heroBackground}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black"></div>
            </div>

            <motion.div
                className="relative z-10 px-8 sm:px-12 lg:px-24 w-full text-left pb-24 md:pb-32"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.h1
                    className="mb-2 max-w-6xl text-[36px] leading-[42px] md:text-[48px] md:leading-normal"
                    style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 500
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Conecta tu marca con la audiencia adecuada
                </motion.h1>
                <motion.p
                    className="mb-8 max-w-5xl"
                    style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal'
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Con Klubit puedes activar campañas, medir su impacto real y fidelizar clientes con datos que antes no tenías.
                </motion.p>
                <motion.button
                    className="px-8 py-4 rounded-lg transition transform hover:scale-105 cursor-pointer"
                    style={{
                        overflow: 'hidden',
                        color: '#F9F9FA',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        backgroundColor: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Solicitar demo
                </motion.button>
            </motion.div>
        </section>
    );
}

export default HeroSection;