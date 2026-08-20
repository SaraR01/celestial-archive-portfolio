import type { Language } from '../types/content';

interface Props {
  language: Language;
  onChange: (language: Language) => void;
}

export function LanguageSwitch({ language, onChange }: Props) {
  return (
    <div className="language-switch" aria-label="Language selector">
      <button className={language === 'es' ? 'active' : ''} onClick={() => onChange('es')}>
        ES
      </button>
      <span aria-hidden="true">◉</span>
      <button className={language === 'en' ? 'active' : ''} onClick={() => onChange('en')}>
        EN
      </button>
    </div>
  );
}
