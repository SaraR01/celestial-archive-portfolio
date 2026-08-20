import type { ProjectItem } from '../types/content';

interface Props {
  items: ProjectItem[];
  language: 'es' | 'en';
}

export function ProjectsContent({ items, language }: Props) {
  const real = items.find((item) => item.status === 'real')!;
  const planned = items.filter((item) => item.status === 'planned');

  return (
    <>
      <article className="book-page book-page--left">
        <p className="eyebrow">{language === 'es' ? 'CAPÍTULO III' : 'CHAPTER III'}</p>
        <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
        <p>
          {language === 'es'
            ? 'Proyectos completos, problemas reales y decisiones técnicas.'
            : 'Complete projects, real problems and technical decisions.'}
        </p>

        <div className="featured-project">
          <span>{real.number}</span>
          <h3>{real.title}</h3>
          <small>{real.stack.join(' · ')}</small>
          <p>{real.description}</p>
        </div>

        <div className="bullet-list">
          {real.points?.map((point) => <p key={point}>✦ {point}</p>)}
        </div>
      </article>

      <article className="book-page book-page--right">
        <p className="eyebrow">
          {language === 'es' ? 'COLECCIÓN DE PROYECTOS' : 'PROJECT COLLECTION'}
        </p>
        <h3>{language === 'es' ? 'Próximos volúmenes' : 'Next volumes'}</h3>
        <div className="project-stack">
          {planned.map((item) => (
            <div className="project-card" key={item.number}>
              <span>{item.number}</span>
              <div>
                <h4>{item.title}</h4>
                <small>{item.stack.join(' · ')}</small>
                <p>{item.description}</p>
              </div>
              <strong>→</strong>
            </div>
          ))}
        </div>

        <div className="dark-principle">
          <small>{language === 'es' ? 'PRINCIPIO' : 'PRINCIPLE'}</small>
          <p>
            {language === 'es'
              ? 'Problema → Investigación → Solución → Resultado'
              : 'Problem → Research → Solution → Result'}
          </p>
        </div>
      </article>
    </>
  );
}
