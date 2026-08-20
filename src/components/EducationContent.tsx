import type { EducationItem } from '../types/content';

interface Props {
  education: EducationItem[];
  certifications: string[];
  language: 'es' | 'en';
}

export function EducationContent({ education, certifications, language }: Props) {
  return (
    <>
      <article className="book-page book-page--left">
        <p className="eyebrow">{language === 'es' ? 'CAPÍTULO V' : 'CHAPTER V'}</p>
        <h2>{language === 'es' ? 'Formación' : 'Education'}</h2>
        <p>
          {language === 'es'
            ? 'Aprender también es construir.'
            : 'Learning is another way of building.'}
        </p>

        <div className="education-list">
          {education.map((item) => (
            <section key={`${item.title}-${item.year}`}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              {item.note && <strong>{item.note}</strong>}
            </section>
          ))}
        </div>
      </article>

      <article className="book-page book-page--right">
        <p className="eyebrow">
          {language === 'es' ? 'CERTIFICACIONES Y FORMACIÓN' : 'CERTIFICATIONS & TRAINING'}
        </p>
        <h3>{language === 'es' ? 'Notas del archivo' : 'Archive notes'}</h3>
        <div className="certificate-grid">
          {certifications.map((item, index) => (
            <div className="certificate-card" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
