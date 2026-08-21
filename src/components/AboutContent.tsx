import { profile } from '../content/profile';

interface Props {
  content: {
    chapter: string;
    title: string;
    intro: string;
    second: string;
    traits: string;
    traitsBody: string;
    quote: string;
    quoteBody: string;
    methodTitle: string;
    method: string[][];
  };
  language: 'es' | 'en';
}

export function AboutContent({ content, language }: Props) {
  return (
    <>
      <article className="book-page book-page--left">
        <p className="eyebrow">{content.chapter}</p>
        <h2>{content.title}</h2>
        <div className="about-grid">
          <div className="portrait-shell">
            <img src={profile.photo} alt={profile.name} />
            <span className="portrait-orbit" />
          </div>
          <div>
            <p>{content.intro}</p>
            <p>{content.second}</p>
          </div>
        </div>
        <p className="traits">{content.traits}</p>
        <p className="traits-detail">{content.traitsBody}</p>
        <blockquote>{content.quote}</blockquote>
        <p>{content.quoteBody}</p>
      </article>

      <article className="book-page book-page--right">
        <p className="eyebrow">
          {language === 'es' ? 'MI FORMA DE TRABAJAR' : 'HOW I WORK'}
        </p>
        <h3>{content.methodTitle}</h3>
        <div className="method-list">
          {content.method.map(([number, title, body]) => (
            <div className="method-item" key={number}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="award-card">
          <span className="award-icon">✦</span>
          <div>
            <h4>{language === 'es' ? 'CUM LAUDE' : 'CUM LAUDE'}</h4>
            <p>
              {language === 'es'
                ? 'Reconocimiento académico que representa disciplina, constancia y una forma de exigirme siempre un poco más.'
                : 'Academic recognition representing discipline, consistency and a habit of always going a little further.'}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
