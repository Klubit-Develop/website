import { motion } from 'framer-motion';
import { useState } from 'react';
import * as yup from 'yup';
import AnimatedSection from '../common/AnimatedSection';

// Schema de validación con Yup
const formSchema = yup.object().shape({
    fullName: yup
        .string()
        .required('El nombre es obligatorio')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo debe contener letras'),
    email: yup
        .string()
        .required('El email es obligatorio')
        .email('Ingresa un email válido'),
    details: yup
        .string()
        .required('El mensaje es obligatorio')
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
});

function Form() {
    // Form states
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        details: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

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
                    subject: `Nuevo mensaje de contacto - ${formData.fullName}`,
                    html: `
                    <h1>Nuevo mensaje de contacto</h1>
                    <p><strong>Nombre:</strong> ${formData.fullName}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Mensaje:</strong> ${formData.details}</p>
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
                email: '',
                details: ''
            });

            alert('Mensaje enviado con éxito. ¡Nos pondremos en contacto contigo pronto!');

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
        <section className="py-20 px-8 sm:px-12 lg:px-24" style={{ backgroundColor: '#0C141B' }}>
            <div className="w-full max-w-7xl">
                <AnimatedSection variants={fadeInUp}>
                    <p className="mb-4" style={{
                        color: '#E5FF88',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal'
                    }}>
                        Envíanos un mensaje
                    </p>
                    <h2 className="mb-12" style={{
                        color: '#FF336D',
                        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '42px'
                    }}>
                        Rellena el formulario y te contactamos
                    </h2>
                </AnimatedSection>

                <AnimatedSection variants={fadeIn}>
                    <div className="w-full pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-16 lg:pr-24">
                        <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-3" style={labelStyle}>
                                    Nombre*
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Escribe aquí"
                                    className="w-full px-4 py-4 focus:outline-none"
                                    style={errors.fullName ? inputErrorStyle : inputStyle}
                                />
                                {errors.fullName && (
                                    <p style={errorStyle}>{errors.fullName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-3" style={labelStyle}>
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Escribe aquí"
                                    className="w-full px-4 py-4 focus:outline-none"
                                    style={errors.email ? inputErrorStyle : inputStyle}
                                />
                                {errors.email && (
                                    <p style={errorStyle}>{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block mb-3" style={labelStyle}>
                                Mensaje*
                            </label>
                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder="Escribe aquí"
                                rows={5}
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
                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </motion.button>
                    </form>
                    </div>
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