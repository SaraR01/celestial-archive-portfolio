import type { Language } from '../types/content';

interface Props {
  language: Language;
  onChange: (language: Language) => void;
}

export function LanguageSwitch({ language, onChange }: Props) {
  return (
    <div className="language-switch" aria-label={language === 'es' ? 'Selector de idioma' : 'Language selector'}>
      <button
        className={language === 'es' ? 'active' : ''}
        onClick={() => onChange('es')}
        aria-label={language === 'es' ? 'Cambiar a español' : 'Switch to Spanish'}
        aria-pressed={language === 'es'}
      >
        ES
      </button>
      <span aria-hidden="true">◉</span>
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => onChange('en')}
        aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to English'}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
