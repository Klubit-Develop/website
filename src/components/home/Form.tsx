import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import * as yup from 'yup';
import AnimatedSection from '../common/AnimatedSection';
import { countries } from '../../utils/countries';

// Schema de validación con Yup
const formSchema = yup.object().shape({
    fullName: yup
        .string()
        .required('El nombre completo es obligatorio')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo debe contener letras'),
    businessName: yup
        .string()
        .required('El nombre del negocio es obligatorio')
        .min(2, 'El nombre del negocio debe tener al menos 2 caracteres'),
    phone: yup
        .string()
        .required('El teléfono es obligatorio')
        .matches(/^[0-9]{6,15}$/, 'Ingresa un número de teléfono válido (6-15 dígitos)'),
    email: yup
        .string()
        .required('El email es obligatorio')
        .email('Ingresa un email válido'),
    details: yup
        .string()
        .required('Los detalles son obligatorios')
        .max(250, 'Los detalles no pueden superar los 250 caracteres')
});

function Form() {
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.suggested && c.code === 'ES') || countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Form states
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        phone: '',
        email: '',
        details: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as any }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }
        }
    };

    const inputStyle = {
        borderRadius: '10px',
        border: '1.5px solid #252E39',
        backgroundColor: '#0C141B',
        color: '#ECF0F5'
    };

    const inputErrorStyle = {
        ...inputStyle,
        border: '1.5px solid #FF336D'
    };

    const labelStyle = {
        color: '#98AAC0',
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal'
    };

    const errorStyle = {
        color: '#FF336D',
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '12px',
        marginTop: '4px'
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const suggestedCountries = countries.filter(c => c.suggested);
    const otherCountries = countries.filter(c => !c.suggested);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'details') {
            setCharCount(value.length);
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            // Validate form data
            await formSchema.validate(formData, { abortEarly: false });


            const response = await fetch('https://api.klubit.io/v1/emails/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'noreply@klubit.io',
                    to: 'development.klubit@gmail.com',
                    subject: `Nueva solicitud de demo - ${formData.businessName}`,
                    html: `
                    <h1>Nueva solicitud de demo</h1>
                    <p><strong>Nombre completo:</strong> ${formData.fullName}</p>
                    <p><strong>Nombre del negocio:</strong> ${formData.businessName}</p>
                    <p><strong>Teléfono de contacto:</strong> +${selectedCountry.phone} ${formData.phone}</p>
                    <p><strong>Email de contacto:</strong> ${formData.email}</p>
                    <p><strong>Detalles:</strong> ${formData.details}</p>
                    `,
                })
            });

            if (!response.ok) {
                console.error('Error sending email:', response.statusText);
                alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
                return;
            }

            // Reset form after successful submission
            setFormData({
                fullName: '',
                businessName: '',
                phone: '',
                email: '',
                details: ''
            });

            setCharCount(0);

            alert('Formulario enviado con éxito. ¡Nos pondremos en contacto contigo pronto!');

        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const validationErrors: Record<string, string> = {};
                err.inner.forEach((error) => {
                    if (error.path) {
                        validationErrors[error.path] = error.message;
                    }
                });
                setErrors(validationErrors);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-4" style={{ backgroundColor: '#0C141B' }}>
            <div className="w-full max-w-7xl mx-auto">
                <AnimatedSection variants={fadeInUp}>
                    <p className="mb-4" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Empieza gratis
                    </p>
                    <h2 className="mb-12" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Solicita una demo
                    </h2>
                </AnimatedSection>

                <AnimatedSection variants={fadeIn}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-3" style={labelStyle}>
                                    Nombre completo*
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Introduce tu nombre completo"
                                    className="w-full px-4 py-4 focus:outline-none"
                                    style={errors.fullName ? inputErrorStyle : inputStyle}
                                />
                                {errors.fullName && (
                                    <p style={errorStyle}>{errors.fullName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-3" style={labelStyle}>
                                    Nombre negocio*
                                </label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                    placeholder="Nombre de tu negocio o club"
                                    className="w-full px-4 py-4 focus:outline-none"
                                    style={errors.businessName ? inputErrorStyle : inputStyle}
                                />
                                {errors.businessName && (
                                    <p style={errorStyle}>{errors.businessName}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-3" style={labelStyle}>
                                    Teléfono de contacto*
                                </label>
                                <div className="flex gap-2">
                                    {/* Custom Country Selector */}
                                    <div ref={dropdownRef} className="relative" style={{ width: '140px' }}>
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full px-4 py-4 focus:outline-none flex items-center justify-between"
                                            style={{
                                                ...inputStyle,
                                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                fontSize: '16px',
                                                fontWeight: 500,
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <img
                                                    loading="lazy"
                                                    width="20"
                                                    srcSet={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png 2x`}
                                                    src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                                                    alt=""
                                                />
                                                <span>+{selectedCountry.phone}</span>
                                            </div>
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                style={{
                                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                                                    transition: 'transform 0.2s'
                                                }}
                                            >
                                                <path
                                                    d="M1 1.5L6 6.5L11 1.5"
                                                    stroke="#ECF0F5"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>

                                        {isOpen && (
                                            <div
                                                className="absolute top-full left-0 w-full mt-1 overflow-y-auto z-50"
                                                style={{
                                                    ...inputStyle,
                                                    maxHeight: '300px',
                                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
                                                }}
                                            >
                                                {/* Suggested Countries */}
                                                {suggestedCountries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsOpen(false);
                                                        }}
                                                        className="w-full px-4 py-3 flex items-center gap-2 hover:bg-opacity-10 transition"
                                                        style={{
                                                            backgroundColor: selectedCountry.code === country.code ? 'rgba(229, 255, 136, 0.1)' : 'transparent',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            color: '#ECF0F5',
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '14px',
                                                            textAlign: 'left'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            if (selectedCountry.code !== country.code) {
                                                                e.currentTarget.style.backgroundColor = 'rgba(255, 51, 109, 0.1)';
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            if (selectedCountry.code !== country.code) {
                                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                            }
                                                        }}
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            width="20"
                                                            srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                                                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                                            alt=""
                                                        />
                                                        <span>+{country.phone}</span>
                                                    </button>
                                                ))}

                                                {/* Divider */}
                                                <div style={{
                                                    height: '1px',
                                                    backgroundColor: '#252E39',
                                                    margin: '4px 0'
                                                }} />

                                                {/* Other Countries */}
                                                {otherCountries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsOpen(false);
                                                        }}
                                                        className="w-full px-4 py-3 flex items-center gap-2 hover:bg-opacity-10 transition"
                                                        style={{
                                                            backgroundColor: selectedCountry.code === country.code ? 'rgba(229, 255, 136, 0.1)' : 'transparent',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            color: '#ECF0F5',
                                                            fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                                            fontSize: '14px',
                                                            textAlign: 'left'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            if (selectedCountry.code !== country.code) {
                                                                e.currentTarget.style.backgroundColor = 'rgba(255, 51, 109, 0.1)';
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            if (selectedCountry.code !== country.code) {
                                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                            }
                                                        }}
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            width="20"
                                                            srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                                                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                                            alt=""
                                                        />
                                                        <span>+{country.phone}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Número de teléfono"
                                            className="w-full px-4 py-4 focus:outline-none"
                                            style={errors.phone ? inputErrorStyle : inputStyle}
                                        />
                                    </div>
                                </div>
                                {errors.phone && (
                                    <p style={errorStyle}>{errors.phone}</p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-3" style={labelStyle}>
                                    Email de contacto*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="tu@email.com"
                                    className="w-full px-4 py-4 focus:outline-none"
                                    style={errors.email ? inputErrorStyle : inputStyle}
                                />
                                {errors.email && (
                                    <p style={errorStyle}>{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label style={labelStyle}>
                                    Detalles*
                                </label>
                                <span style={{
                                    color: charCount > 250 ? '#FF336D' : '#98AAC0',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 500
                                }}>
                                    {charCount}/250
                                </span>
                            </div>
                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder="Cuéntanos más sobre tu club o negocio"
                                rows={5}
                                maxLength={250}
                                className="w-full px-4 py-4 focus:outline-none resize-none"
                                style={errors.details ? inputErrorStyle : inputStyle}
                            ></textarea>
                            {errors.details && (
                                <p style={errorStyle}>{errors.details}</p>
                            )}
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-10 py-4"
                            style={{
                                borderRadius: '10px',
                                backgroundColor: isSubmitting ? '#CC2957' : '#FF336D',
                                color: '#F9F9FA',
                                textAlign: 'center',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                border: 'none',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                opacity: isSubmitting ? 0.7 : 1
                            }}
                            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                            {isSubmitting ? 'Enviando...' : 'Solicitar'}
                        </motion.button>
                    </form>
                </AnimatedSection>
            </div>

            <style>{`
                input::placeholder,
                textarea::placeholder {
                    color: #ECF0F5;
                    font-family: "Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            `}</style>
        </section>
    );
}

export default Form;