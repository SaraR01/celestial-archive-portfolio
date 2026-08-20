import type { ExperienceItem } from '../types/content';

interface Props {
  items: ExperienceItem[];
  language: 'es' | 'en';
}

export function ExperienceContent({ items, language }: Props) {
  return (
    <>
      <article className="book-page book-page--left">
        <p className="eyebrow">{language === 'es' ? 'CAPÍTULO II' : 'CHAPTER II'}</p>
        <h2>{language === 'es' ? 'Experiencia' : 'Experience'}</h2>
        <p>
          {language === 'es'
            ? 'Una trayectoria construida resolviendo, coordinando y aprendiendo.'
            : 'A journey built through solving, coordinating and learning.'}
        </p>
        <div className="timeline">
          {items.slice(0, 2).map((item) => (
            <section className="timeline-item" key={`${item.company}-${item.period}`}>
              <span className="timeline-dot" />
              <small>{item.period}</small>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.focus}</p>
              <div className="tag-row">
                {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </section>
          ))}
        </div>
      </article>

      <article className="book-page book-page--right">
        <p className="eyebrow">{language === 'es' ? 'LO QUE APORTO' : 'WHAT I BRING'}</p>
        <h3>{language === 'es' ? 'Más que una lista de tareas' : 'More than a task list'}</h3>
        <div className="impact-list">
          {(language === 'es'
            ? [
                ['COORDINACIÓN', 'Seguimiento de workstreams, bloqueos, riesgos y entregables.'],
                ['TRAZABILIDAD', 'Tareas, defectos, hallazgos y documentación clara.'],
                ['SEGURIDAD', 'Vulnerabilidades, remediación y seguridad de la información.'],
                ['OPERACIÓN', 'AWS, incidentes, reporting y escalamiento.'],
                ['ENTREGA', 'SDLC, pruebas, cambios, releases e implementaciones.'],
              ]
            : [
                ['COORDINATION', 'Tracking workstreams, blockers, risks and deliverables.'],
                ['TRACEABILITY', 'Tasks, defects, findings and clear documentation.'],
                ['SECURITY', 'Vulnerabilities, remediation and information security.'],
                ['OPERATIONS', 'AWS, incidents, reporting and escalation.'],
                ['DELIVERY', 'SDLC, testing, changes, releases and implementations.'],
              ]).map(([title, body], index) => (
                <div className="impact-item" key={title}>
                  <span>0{index + 1}</span>
                  <div><strong>{title}</strong><p>{body}</p></div>
                </div>
              ))}
        </div>
      </article>
    </>
  );
}
