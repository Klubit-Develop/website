import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import i18n from '../locales/i18n';

type Language = 'es' | 'en';

interface LanguageStore {
    language: Language;
    setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set) => ({
            language: 'es',
            setLanguage: (lang: Language) => {
                set({ language: lang });
                i18n.changeLanguage(lang);
            },
        }),
        {
            name: 'klubit-language-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);