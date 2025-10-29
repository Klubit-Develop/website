import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

function FAQList() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData: FAQItem[] = [
        {
            question: '¿Qué tipo de eventos puedo encontrar en Klubit?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Dónde está disponible Klubit actualmente?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Puedo comprar entradas desde la app?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Qué es KlaudIA?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Qué formas de pago hay?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Qué hago si tengo un problema con una entrada?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Puedo compartir eventos con mis amigos?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿La app tiene coste para los usuarios?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Puedo filtrar eventos por mis preferencias?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Cómo accedo a un evento el día de la fiesta?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Puedo guardar eventos que me interesan?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Qué pasa si cambio de móvil o número?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Qué incluye la sección Comunidad?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Qué es Klub Manager?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Puedo contactar con un local desde Klubit?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Puedo recibir notificaciones personalizadas de eventos?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Necesito internet para mostrar mi entrada?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Mis datos están seguros en Klubit?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            question: '¿Cómo puedo ver quién más va a un evento?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 mb-40 px-8 sm:px-12 lg:px-24" style={{ backgroundColor: '#000' }}>
            <div className="w-full">

                <div className="space-y-0">
                    {faqData.map((faq, index) => (
                        <div
                            className='px-5'
                            key={index}
                            style={{
                                borderTop: index === 0 ? '1px solid #333' : 'none',
                                borderBottom: '1px solid #333'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left"
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: 'normal'
                                }}>
                                    {faq.question}
                                </span>
                                <motion.svg
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ minWidth: '24px' }}
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#ECF0F5"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div className="pb-6 pr-12" style={{
                                            color: '#98AAC0',
                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '24px'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQList;