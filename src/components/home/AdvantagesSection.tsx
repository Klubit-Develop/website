import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';

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

    const advantagesContent = {
        'Usuarios': [
            "Eventos personalizados. KlaudIA recomienda planes según tus intereses.",
            "Compra en un clic. Entradas, consumiciones y reservas desde tu móvil.",
            "Wallet & Kpoints. Almacena entradas, paga y acumula puntos para beneficios exclusivos.",
            "Comparte gastos. Divide pagos con amigos al instante.",
            "Comunidad Klubit. Conecta con otros Klubbers y RRPPs.",
            "Seguridad garantizada. Pagos protegidos con antifraude y blockchain."
        ],
        'Klubs': [
            "Gestión integral. Centraliza eventos, clientes, reservas y ventas en una sola plataforma.",
            "IA para optimizar. KlaudIA ajusta precios, promociones y aforos en tiempo real.",
            "App Staff. Control de accesos y validación antifraude al instante.",
            "Fidelización automática. Crea programas de puntos y recompensas sin esfuerzo.",
            "Datos accionables. Conoce a tus clientes con métricas y predicciones de consumo.",
            "Omnicanalidad de ventas. Vende desde tu web, la app Klubit o integraciones externas."
        ],
        'Marcas': [
            "Campañas inteligentes. Activa promociones en el momento y lugar adecuados.",
            "IA de segmentación. Llega a tu público con datos de consumo reales.",
            "Impacto medible. Conoce el ROI de cada acción en tiempo real.",
            "Promociones dinámicas. Ajusta descuentos y experiencias al vuelo.",
            "Presencia directa. Activa tu marca dentro del ecosistema Klubit.",
            "Transparencia total. Relaciona inversión con retorno gracias a informes claros."
        ],
        'RRPPs': [
            "Gestión sencilla. Organiza clientes y eventos desde una app, sin Excel ni WhatsApp.",
            "IA para engagement. KlaudIA automatiza recordatorios, mensajes y promociones.",
            "Crecimiento visible. Mide tu rendimiento y comunidad en tiempo real.",
            "Conexión directa. Comunícate con clientes desde la app y amplía tu base.",
            "Recompensas integradas. Gana más por cada cliente recurrente fidelizado.",
            "Análisis instantáneo. Conoce el comportamiento de tus invitados al detalle."
        ]
    };

    const advantages = advantagesContent[activeTab as keyof typeof advantagesContent];

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
                        <div className="inline-flex p-0.5 md:p-1" style={{ 
                            borderRadius: '20px',
                            border: '1px solid #252E39',
                            backgroundColor: '#000'
                        }}>
                            {['Usuarios', 'Klubs', 'Marcas', 'RRPPs'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className="px-6 py-1.5 md:px-8 md:py-2 transition-all duration-300 text-sm"
                                    style={{
                                        borderRadius: '16px',
                                        backgroundColor: activeTab === tab ? '#252E39' : 'transparent',
                                        color: activeTab === tab ? '#E5FF88' : '#ECF0F5',
                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
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

                <AnimatedSection variants={staggerContainer} key={activeTab}>
                    <div className="space-y-6">
                        {advantages.map((advantage, index) => (
                            <motion.div key={index} variants={fadeInUp} className="flex items-start">
                                <Check className="mr-3 md:mr-4 flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" style={{ color: '#E5FF88' }} />
                                <p className="text-base md:text-[22px]" style={{ 
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
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