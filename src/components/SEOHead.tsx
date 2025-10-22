import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../stores/useLanguageStore';

function SEOHead() {
    const { t } = useTranslation();
    const { language } = useLanguageStore();

    return (
        <Helmet>
            {/* HTML Lang Attribute */}
            <html lang={language} />

            {/* Basic Meta Tags */}
            <title>{t('seo.title')}</title>
            <meta name="description" content={t('seo.description')} />
            <meta name="keywords" content={t('seo.keywords')} />
            <meta name="author" content={t('seo.author')} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://klubit.com/" />
            <meta property="og:title" content={t('seo.ogTitle')} />
            <meta property="og:description" content={t('seo.ogDescription')} />
            <meta property="og:image" content="https://klubit.fra1.cdn.digitaloceanspaces.com/web/logo.png" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://klubit.com/" />
            <meta name="twitter:title" content={t('seo.twitterTitle')} />
            <meta name="twitter:description" content={t('seo.twitterDescription')} />
            <meta name="twitter:image" content="https://klubit.fra1.cdn.digitaloceanspaces.com/web/logo.png" />

            {/* LinkedIn */}
            <meta property="article:author" content="https://www.linkedin.com/company/klub-it-es/?viewAsMember=true" />
            <meta property="og:site_name" content="Klubit" />
            <meta property="og:type" content="article" />
            <meta property="og:image:alt" content="Klubit Logo" />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="canonical" href={`https://klubit.com/${language === 'es' ? '' : language}`} />

            {/* Alternate Languages */}
            <link rel="alternate" hrefLang="es" href="https://klubit.com/es" />
            <link rel="alternate" hrefLang="en" href="https://klubit.com/en" />
            <link rel="alternate" hrefLang="x-default" href="https://klubit.com/" />
        </Helmet>
    );
}

export default SEOHead;