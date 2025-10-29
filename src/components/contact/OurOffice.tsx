import { useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';
import OfficeBackground from '../../assets/images/contact/office-background.png';

function OurOffice() {
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

    return (
        <section className="py-20 px-8 sm:px-12 lg:px-24">
            <div className="w-full max-w-7xl">
                <AnimatedSection variants={fadeInUp}>
                    <p className="mb-2" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Conócenos de cerca
                    </p>
                    <h2 className="mb-12" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Nuestra oficina
                    </h2>
                </AnimatedSection>

                <AnimatedSection variants={staggerContainer} key={activeTab}>
                    <div className="mx-auto max-w-6xl">
                        {/* Office Card */}
                        <div
                        // alinear item al centro
                        className="grid md:grid-cols-2 rounded-3xl overflow-hidden"
                        style={{
                            backgroundColor: '#000',
                            border: '1px solid #252E39'
                        }}
                    >
                        {/* Left Side - Image */}
                        <div className="relative h-[400px] md:h-auto">
                            <img
                                src={OfficeBackground}
                                alt="Oficina Madrid"
                                className="w-full h-full object-cover"
                            />
                            {/* Location Pin Badge */}
                            <div
                                className="absolute top-6 left-6 px-3 py-3 flex items-center gap-2"
                                style={{
                                    borderRadius: '10px',
                                    border: '1.5px solid #8E8E8E',
                                    background: 'linear-gradient(92deg, rgba(203, 203, 203, 0.49) 2.29%, rgba(203, 203, 203, 0.21) 98.59%)',
                                    backdropFilter: 'blur(3.39px)'
                                }}
                            >
                                📍
                                <span style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}>
                                    Alonso Martínez
                                </span>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="mb-6" style={{
                                color: '#E5FF88',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal'
                            }}>
                                Oficina de Madrid
                            </h3>

                            <p className="mb-8" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                Estamos en el corazón de Chamberí, uno de los barrios más vibrantes y mejor conectados de la capital. A solo unos pasos de la plaza de Alonso Martínez.
                            </p>

                            {/* Dirección */}
                            <div className="mb-6">
                                <h4 className="mb-2" style={{
                                    color: '#98AAC0',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal'
                                }}>
                                    Dirección
                                </h4>
                                <p style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    Calle de Covarrubias, 22, Chamberí, 28010 Madrid
                                </p>
                            </div>

                            {/* Horario */}
                            <div className="mb-6">
                                <h4 className="mb-2" style={{
                                    color: '#98AAC0',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal'
                                }}>
                                    Horario
                                </h4>
                                <p style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal'
                                }}>
                                    lunes a jueves de 9:30h - 18:00h<br />
                                    viernes de 9:30h - 15:30h
                                </p>
                            </div>

                            {/* Cómo llegar */}
                            <div>
                                <a
                                    href="https://maps.app.goo.gl/tAsjKjecVJho6JUa9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: '#98AAC0',
                                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                        fontSize: '18px',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: 'normal',
                                        textDecorationLine: 'underline',
                                        textDecorationStyle: 'solid'
                                    }}
                                >
                                    Cómo llegar
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default OurOffice;