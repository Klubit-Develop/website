import { motion } from 'framer-motion';

import heroBackground from '../../assets/images/legal-notice/hero-background.jpg';

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
                    className="mb-2 max-w-5xl text-[36px] leading-[42px] md:text-[48px] md:leading-normal"
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
                    Aviso legal
                </motion.h1>
            </motion.div>
        </section>
    );
}

export default HeroSection;