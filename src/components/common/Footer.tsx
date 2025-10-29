import React from 'react';
import { Link } from 'react-router-dom'; // ← Agregado
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../stores/useLanguageStore';
import appleStore from '../../assets/images/common/apple-store.png';
import googlePlay from '../../assets/images/common/google-play.png';
import iconApp from '../../assets/images/common/icon-app.png';

function Footer() {
    const { t } = useTranslation();
    const { language, setLanguage } = useLanguageStore();

    const titleStyle = {
        color: '#98AAC0',
        textAlign: 'left' as const,
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '14px',
        fontStyle: 'normal' as const,
        fontWeight: 700,
        lineHeight: 'normal'
    };

    const listItemStyle = {
        color: '#ECF0F5',
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '14px',
        fontStyle: 'normal' as const,
        fontWeight: 400,
        lineHeight: 'normal'
    };

    const copyrightStyle = {
        color: '#98AAC0',
        fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '14px',
        fontStyle: 'normal' as const,
        fontWeight: 400,
        lineHeight: 'normal'
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as 'es' | 'en');
    };

    return (
        <footer style={{
            borderTop: '2px solid #303030',
            background: '#05070A',
            backdropFilter: 'blur(7.5px)',
            padding: '48px 16px'
        }}>
            <div className="w-full max-w-7xl mx-auto">
                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Funcionalidades */}
                    <div>
                        <h4 className="mb-6" style={titleStyle}>{t('footer.features.title')}</h4>
                        <ul className="space-y-5">
                            <li>
                                <Link 
                                    to="/brands"
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.features.forBrands')}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/klubs"
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.features.forClubs')}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/users"
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.features.forUsers')}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/rrpps"
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.features.forPR')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h4 className="mb-6" style={titleStyle}>{t('footer.company.title')}</h4>
                        <ul className="space-y-5">
                            <li>
                                <Link 
                                    to="/about-us"
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.company.about')}
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="/contact" 
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.company.contact')}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.company.faq')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-6" style={titleStyle}>{t('footer.legal.title')}</h4>
                        <ul className="space-y-5">
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.legal.legalNotice')}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.legal.privacyPolicy')}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.legal.cookiesPolicy')}
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:transition"
                                    style={listItemStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ECF0F5'}
                                >
                                    {t('footer.legal.termsConditions')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Language Selector */}
                    <div>
                        <h4 className="mb-6" style={titleStyle}>{t('footer.language.title')}</h4>
                        <div className="relative">
                            <select
                                value={language}
                                onChange={handleLanguageChange}
                                className="w-full appearance-none rounded-lg px-4 py-3 pr-10 cursor-pointer transition-all"
                                style={{
                                    background: '#1A1D23',
                                    border: '1px solid #303030',
                                    color: '#ECF0F5',
                                    fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <option value="es">{t('footer.language.spanish')}</option>
                                <option value="en">{t('footer.language.english')}</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#ECF0F5' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright and Social Media */}
                <div 
                    className="flex flex-col md:flex-row justify-between items-center" 
                    style={{ 
                        borderTop: '2px solid #303030',
                        paddingTop: '32px',
                        paddingBottom: '32px',
                        minHeight: '80px'
                    }}
                >
                    <p className="mb-12 md:mb-0 text-center md:text-left" style={copyrightStyle}>
                        {t('footer.copyright')}
                    </p>
                    <div className="flex items-center gap-6">
                        <a 
                            href="#" 
                            className="hover:transition"
                            style={{ color: '#98AAC0' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#98AAC0'}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a 
                            href="#" 
                            className="hover:transition"
                            style={{ color: '#98AAC0' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#98AAC0'}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a 
                            href="#" 
                            className="hover:transition"
                            style={{ color: '#98AAC0' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FF336D'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#98AAC0'}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* App Download Section */}
                <div className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6" style={{ borderTop: '2px solid #303030' }}>
                    <div className="flex items-center gap-4 flex-1">
                        <img 
                            src={iconApp} 
                            alt="Klubit App Icon" 
                            style={{
                                width: '48px',
                                height: '48px'
                            }}
                        />
                        <div>
                            <h5 className="mb-1" style={{
                                color: '#ECF0F5',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal'
                            }}>
                                {t('footer.downloadApp.title')}
                            </h5>
                            <p style={{
                                color: '#98AAC0',
                                fontFamily: '"Helvetica Now Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: 'normal'
                            }}>
                                {t('footer.downloadApp.description')}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-6">
                        <a 
                            href="#" 
                            className="transition"
                            style={{ 
                                display: 'block'
                            }}
                        >
                            <img 
                                src={appleStore} 
                                alt="Download on App Store"
                                style={{
                                    height: '40px',
                                    width: 'auto'
                                }}
                            />
                        </a>
                        <a 
                            href="#" 
                            className="transition"
                            style={{ 
                                display: 'block'
                            }}
                        >
                            <img 
                                src={googlePlay} 
                                alt="Get it on Google Play"
                                style={{
                                    height: '40px',
                                    width: 'auto'
                                }}
                            />
                        </a>
                    </div>
                </div>

                {/* Logo */}
                <div className="mt-6 md:mt-12 pt-8 text-left md:text-center" style={{ borderTop: '2px solid #303030' }}>
                    <img 
                        src="https://klubit.fra1.cdn.digitaloceanspaces.com/web/logo.png" 
                        alt="Klubit Logo"
                        className="md:mx-auto"
                        style={{
                            height: '20px',
                            width: 'auto'
                        }}
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;