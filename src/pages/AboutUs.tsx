import { motion, type Variants } from 'framer-motion';
import AnimatedSection from '../components/common/AnimatedSection';

const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    }
};

function AboutUs() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://klubit.fra1.cdn.digitaloceanspaces.com/web/hero-home-background.jpg"
                        alt="Club atmosphere"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black"></div>
                </div>

                <motion.div
                    className="relative z-10 px-8 sm:px-12 lg:px-24 w-full text-left pb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.h1
                        className="mb-4"
                        style={{
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '48px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal'
                        }}
                    >
                        Conócenos
                    </motion.h1>
                    <motion.p
                        className="max-w-3xl"
                        style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Descubre una nueva visión: claro: conectar, personas, lugares y marcas en una experiencia digital personalizada y con propósito. Este es el viaje de Klubit.
                    </motion.p>
                </motion.div>
            </section>

            {/* Un Saas Revolucionario */}
            <section className="py-16 px-8 sm:px-12 lg:px-24">
                <AnimatedSection variants={fadeIn}>
                    <div className="max-w-4xl">
                        <p className="mb-6" style={{
                            color: '#E5FF88',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal'
                        }}>
                            Un Saas revolucionario
                        </p>
                        <h2 className="mb-8" style={{
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '36px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '44px'
                        }}>
                            ¿Qué es Klubit?
                        </h2>
                        <div className="space-y-6" style={{
                            color: '#ECF0F5',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '28px'
                        }}>
                            <p>
                                Klubit no es simplemente un sistema de ventas de entradas; es un ecosistema de ocio nocturno integrado. Nuestra plataforma está diseñada para fomentar el crecimiento y facilitar de una comunidad activa que incluye tanto relaciones públicas (RRPPs) como usuarios con códigos de contacto, permitiéndoles una economía del desearte proporciona un vínculo en la gestión del espectáculo nocturno.
                            </p>
                            <p>
                                Al conectar a todos los intermediarios, facilitamos una relación simbiótica que enriquece cada visita a través de un programa de fidelización que reconoce y los usuarios con incentivos.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Welcome to the Funverse */}
            <section className="py-16 px-8 sm:px-12 lg:px-24 text-center">
                <AnimatedSection variants={fadeIn}>
                    <h2 className="text-4xl md:text-5xl mb-4" style={{
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 500,
                        lineHeight: '1.2'
                    }}>
                        Welcome to the <span style={{ color: '#FF336D' }}>Funverse</span>
                        <span className="mx-4">·</span>
                        Bienvenido al <span style={{ color: '#FF336D' }}>Funverse</span>
                    </h2>
                </AnimatedSection>
            </section>

            {/* Nuestra Historia */}
            <section className="py-16 px-8 sm:px-12 lg:px-24">
                <AnimatedSection variants={fadeIn}>
                    <div className="max-w-6xl mx-auto">
                        <p className="mb-4" style={{
                            color: '#E5FF88',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal'
                        }}>
                            Cómo empezó todo
                        </p>
                        <h2 className="mb-12" style={{
                            color: '#FF336D',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '36px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '44px'
                        }}>
                            Nuestra historia
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'El comienzo',
                                    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop'
                                },
                                {
                                    title: 'El concepto',
                                    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
                                },
                                {
                                    title: 'El equipo',
                                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                                },
                                {
                                    title: 'El desafío',
                                    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="relative overflow-hidden rounded-2xl h-80 group cursor-pointer"
                                    style={{
                                        backgroundColor: '#000000',
                                        border: '2px solid #303030'
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                                        <h3 style={{
                                            color: '#ECF0F5',
                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: 'normal'
                                        }}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="absolute bottom-6 right-6 text-sm" style={{ color: '#ECF0F5' }}>
                                        Ver más →
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Nuestra razón de Ser */}
            <section className="py-16 px-8 sm:px-12 lg:px-24">
                <AnimatedSection variants={fadeIn}>
                    <div className="max-w-6xl mx-auto">
                        <p className="mb-12 text-center" style={{
                            color: '#E5FF88',
                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal'
                        }}>
                            Nuestra razón de Ser
                        </p>

                        {/* Misión */}
                        <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{
                            backgroundColor: '#000000',
                            border: '2px solid #303030'
                        }}>
                            <h3 className="mb-6" style={{
                                color: '#FF336D',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '40px'
                            }}>
                                Misión
                            </h3>
                            <p style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '28px'
                            }}>
                                Nuestra misión es digitalizar y transformar el ocio nocturno a través de la inteligencia artificial, convirtiendo a clubes, usuarios, RRPPs y marcas en un ecosistema dócil: todos ganan. Queremos simplificar la gestión, aumentar la rentabilidad y crear experiencias únicas que mejoren la vida de nuestros usuarios, la rentabilidad de nuestros socios y el futuro de cada experiencia nocturna.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="mb-16 p-8 md:p-12 rounded-3xl" style={{
                            backgroundColor: '#000000',
                            border: '2px solid #303030'
                        }}>
                            <h3 className="mb-6" style={{
                                color: '#FF336D',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '40px'
                            }}>
                                Visión
                            </h3>
                            <p style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '28px'
                            }}>
                                Nuestra visión es liderar la evolución del ocio inteligente a nivel global, convirtiéndonos en la plataforma de referencia para disfrutar, gestionar e innovar cada experiencia nocturna. Integraremos un futuro en el que cada cliente vibre, cada marca pueda medir el impacto real de sus acciones.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="p-8 md:p-12 rounded-3xl" style={{
                            backgroundColor: '#000000',
                            border: '2px solid #303030'
                        }}>
                            <h3 className="mb-8" style={{
                                color: '#FF336D',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '40px'
                            }}>
                                Valores
                            </h3>
                            <ul className="space-y-4" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '28px'
                            }}>
                                <li className="flex items-start">
                                    <span className="mr-3" style={{ color: '#FF336D' }}>•</span>
                                    <span><strong style={{ color: '#E5FF88' }}>Innovación constante:</strong> Apostamos por la IA y la tecnología para transformar un sector poco digitalizado.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3" style={{ color: '#FF336D' }}>•</span>
                                    <span><strong style={{ color: '#E5FF88' }}>Conexión real:</strong> Creamos y unir a personas, locales y marcas en un ecosistema justo y beneficioso para todos.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3" style={{ color: '#FF336D' }}>•</span>
                                    <span><strong style={{ color: '#E5FF88' }}>Experiencia centrada en el usuario:</strong> Diseñamos cada funcionalidad pensando en la simplicidad y el valor que quieren disfrutar sin esfuerzo.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3" style={{ color: '#FF336D' }}>•</span>
                                    <span><strong style={{ color: '#E5FF88' }}>Crecimiento compartido:</strong> Todos sube para que nuestros usuarios, clubs, RRPPs y marcas ganen primero.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}

export default AboutUs;