import { profile } from '../content/profile';
import type { Language } from '../types/content';
import { LanguageSwitch } from './LanguageSwitch';

interface Props {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Header({ language, onLanguageChange }: Props) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={language === 'es' ? 'Inicio' : 'Home'}>
        <span className="monogram"><span>SRP</span></span>
        <span>
          <strong>{profile.name}</strong>
          <small>
            {language === 'es' ? profile.roleEs : profile.roleEn} ·{' '}
            {language === 'es' ? profile.recognitionEs : profile.recognitionEn}
          </small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
        <a href="#library">{language === 'es' ? 'ARCHIVO' : 'ARCHIVE'}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GITHUB</a>
      </nav>

      <LanguageSwitch language={language} onChange={onLanguageChange} />
    </header>
  );
}
