import type { SkillGroup, SkillLevel } from '../types/content';

interface Props {
  items: SkillGroup[];
  language: 'es' | 'en';
}

const levelLabels: Record<'es' | 'en', Record<SkillLevel, string>> = {
  es: {
    professional: 'EXPERIENCIA PROFESIONAL',
    practical: 'PRÁCTICA / FORMACIÓN',
    complementary: 'CONOCIMIENTO COMPLEMENTARIO',
  },
  en: {
    professional: 'PROFESSIONAL EXPERIENCE',
    practical: 'PRACTICE / TRAINING',
    complementary: 'COMPLEMENTARY KNOWLEDGE',
  },
};

export function SkillsContent({ items, language }: Props) {
  return (
    <>
      <article className="book-page book-page--left">
        <p className="eyebrow">{language === 'es' ? 'CAPÍTULO IV' : 'CHAPTER IV'}</p>
        <h2>{language === 'es' ? 'Habilidades' : 'Skills'}</h2>
        <p>
          {language === 'es'
            ? 'Un códice organizado por contexto real de uso, no por porcentajes subjetivos.'
            : 'A codex organized by real usage context, not subjective percentages.'}
        </p>
        <div className="skill-codex">
          {items.slice(0, 4).map((group) => (
            <section className="skill-block" key={group.title}>
              <small>{levelLabels[language][group.level]}</small>
              <h3>{group.title}</h3>
              <p>{group.items.join(' · ')}</p>
            </section>
          ))}
        </div>
      </article>

      <article className="book-page book-page--right skill-map-page">
        <p className="eyebrow">{language === 'es' ? 'MAPA DE CONOCIMIENTO' : 'KNOWLEDGE MAP'}</p>
        <h3>{language === 'es' ? 'Constelaciones técnicas' : 'Technical constellations'}</h3>
        <div className="skill-constellation-map">
          {items.slice(4).map((group, index) => (
            <div
              className={`skill-constellation skill-constellation--${index + 1}`}
              key={group.title}
            >
              <span className="constellation-node" />
              <strong>{group.title}</strong>
              <small>{levelLabels[language][group.level]}</small>
              <p>{group.items.slice(0, 6).join(' · ')}</p>
            </div>
          ))}
        </div>
        <div className="skill-legend">
          <span>● {levelLabels[language].professional}</span>
          <span>◐ {levelLabels[language].practical}</span>
          <span>○ {levelLabels[language].complementary}</span>
        </div>
      </article>
    </>
  );
}
