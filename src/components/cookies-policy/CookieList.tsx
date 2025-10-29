import { useState, useEffect } from 'react';
import { type Variants } from 'framer-motion';

import { useLanguageStore } from '../../stores/useLanguageStore';
import AnimatedSection from '../common/AnimatedSection';

interface Translation {
    id: string;
    language: string;
    title: string;
    description: string;
    sectionId: string;
}

interface Section {
    id: string;
    order: number;
    cookiePolicyId: string;
    translations: Translation[];
}

interface CookiePolicyData {
    id: string;
    version: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    sections: Section[];
}

interface ApiResponse {
    status: string;
    code: string;
    data: {
        cookiePolicy: CookiePolicyData;
    };
    message: string;
    details: string;
}

function CookieList() {
    const { language } = useLanguageStore();
    const [sections, setSections] = useState<Section[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTerms = async () => {
            try {
                setLoading(true);
                setError(null);

                // Convertir el idioma a mayúsculas para la API (es -> ES, en -> EN)
                const apiLanguage = language.toUpperCase();

                const response = await fetch(
                    `https://api.klubit.io/v1/cookie-policy?language=${apiLanguage}`
                );

                if (!response.ok) {
                    throw new Error('Error al cargar la política de cookies');
                }

                const apiData: ApiResponse = await response.json();

                // Extraer las secciones del objeto anidado
                if (apiData.data && apiData.data.cookiePolicy) {
                    setSections(apiData.data.cookiePolicy.sections);
                } else {
                    throw new Error('Estructura de datos incorrecta');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
                console.error('Error fetching terms:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTerms();
    }, [language]);

    // Función para procesar texto con markdown (negritas con **)
    const parseMarkdown = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);

        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                // Texto en negrita
                const boldText = part.slice(2, -2);
                return <strong key={index}>{boldText}</strong>;
            }
            return part;
        });
    };

    const titleStyle = {
        color: '#E5FF88',
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '18px',
        fontStyle: 'normal' as const,
        fontWeight: 700,
        lineHeight: 'normal',
        marginBottom: '12px'
    };

    const descriptionStyle = {
        color: '#ECF0F5',
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '18px',
        fontStyle: 'normal' as const,
        fontWeight: 400,
        lineHeight: 'normal',
        marginBottom: '32px'
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };

    if (loading) {
        return (
            <section className="py-20 sm:px-12 lg:px-24" style={{ backgroundColor: '#0C141B' }}>
                <div className="w-full max-w-7xl mx-auto">
                    <p style={{
                        color: '#ECF0F5',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        textAlign: 'center'
                    }}>
                        Cargando política de cookies...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 sm:px-12 lg:px-24" style={{ backgroundColor: '#0C141B' }}>
                <div className="w-full max-w-7xl mx-auto">
                    <p style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '18px',
                        textAlign: 'center'
                    }}>
                        {error}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 sm:px-12 lg:px-24" style={{ backgroundColor: '#0C141B' }}>
            <div className="w-full max-w-7xl mx-auto">
                <div className="space-y-8">
                    {sections
                        .sort((a, b) => a.order - b.order)
                        .map((section) => {
                            // Obtener el idioma actual en mayúsculas
                            const currentLanguage = language.toUpperCase();

                            // Encontrar la traducción para el idioma actual
                            const translation = section.translations.find(
                                (t) => t.language === currentLanguage
                            );

                            // Si no hay traducción para este idioma, no renderizar nada
                            if (!translation) return null;

                            return (
                                <AnimatedSection
                                    key={section.id}
                                    variants={fadeInUp}
                                >
                                    <div>
                                        <h2 style={titleStyle}>
                                            {translation.title}
                                        </h2>
                                        <p style={descriptionStyle}>
                                            {parseMarkdown(translation.description)}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default CookieList;