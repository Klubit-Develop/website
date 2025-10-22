import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

function AdvantagesSection() {
    const [activeTab, setActiveTab] = useState('Usuarios');
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }
        }
    };

    const advantages = [
        "Eventos personalizados: KlaudIA recomienda planes según tus intereses.",
        "Compra en un clic. Entradas, consumiciones y reservas desde tu móvil.",
        "Wallet & Kpoints. Almacena entradas, paga y acumula puntos para beneficios exclusivos.",
        "Comparte gastos. Divide pagos con amigos al instante.",
        "Comunidad Klubit. Conecta con otros Klubbers y RRPPs.",
        "Seguridad garantizada. Pagos protegidos con antifraude y blockchain."
    ];

    return (
        <section className="py-20 px-4">
            <div className="w-full max-w-7xl mx-auto">
                <AnimatedSection variants={fadeInUp}>
                    <p className="mb-2" style={{ 
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Un Saas revolucionario
                    </p>
                    <h2 className="mb-12" style={{ 
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Ventajas destacadas
                    </h2>
                    
                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex p-1" style={{ 
                            borderRadius: '20px',
                            border: '1px solid #252E39',
                            backgroundColor: '#000'
                        }}>
                            {['Usuarios', 'Klubs', 'Marcas', 'RRPPs'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className="px-8 py-3 transition-all duration-300"
                                    style={{
                                        borderRadius: '16px',
                                        backgroundColor: activeTab === tab ? '#252E39' : 'transparent',
                                        color: activeTab === tab ? '#E5FF88' : '#ECF0F5',
                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        lineHeight: '20px',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection variants={staggerContainer}>
                    <div className="space-y-6">
                        {advantages.map((advantage, index) => (
                            <motion.div key={index} variants={fadeInUp} className="flex items-start">
                                <Check className="mr-4 flex-shrink-0 mt-1" size={24} style={{ color: '#E5FF88' }} />
                                <p style={{ 
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}>
                                    {advantage}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default AdvantagesSection;