import { useState } from 'react';
import type { ProfessionalCase, ProjectItem } from '../types/content';
import { projectsIntroEn } from '../content/en';
import { projectsIntroEs } from '../content/es';
import { ComingSoonVolume } from './ComingSoonVolume';

interface Props {
  items: ProjectItem[];
  language: 'es' | 'en';
}

export function ProjectsContent({ items, language }: Props) {
  const [selectedCaseNumber, setSelectedCaseNumber] = useState<string | null>(null);
  const cases = items.filter((item): item is ProfessionalCase => item.status === 'case');
  const planned = items.filter((item) => item.status === 'planned');
  const selectedCase = cases.find((item) => item.number === selectedCaseNumber) ?? null;
  const intro = language === 'es' ? projectsIntroEs : projectsIntroEn;
  const labels = language === 'es'
    ? {
        cases: 'CASOS PROFESIONALES',
        open: 'Abrir expediente →',
        archive: 'ARCHIVO',
        context: 'Contexto',
        participation: 'Mi participación',
        process: 'Proceso',
        result: 'Resultado',
        tools: 'Tecnologías / Herramientas',
        back: '← Volver a proyectos',
        next: 'PRÓXIMOS VOLÚMENES',
      }
    : {
        cases: 'PROFESSIONAL CASES',
        open: 'Open case file →',
        archive: 'FILE',
        context: 'Context',
        participation: 'My contribution',
        process: 'Process',
        result: 'Outcome',
        tools: 'Technologies / Tools',
        back: '← Back to projects',
        next: 'NEXT VOLUMES',
      };

  if (selectedCase) {
    return (
      <>
        <article className="book-page book-page--left project-detail-page projects-view">
          <p className="eyebrow">{labels.archive} / {selectedCase.number}</p>
          <p className="project-case-category">{selectedCase.category}</p>
          <h2>{selectedCase.title}</h2>
          {selectedCase.subtitle && <p className="project-case-subtitle">{selectedCase.subtitle}</p>}
          {selectedCase.meta && (
            <p className="project-case-meta">
              <strong>{selectedCase.metaLabel}</strong> · {selectedCase.meta}
            </p>
          )}
          <section className="project-case-section">
            <h3>{labels.context}</h3>
            <p>{selectedCase.context}</p>
          </section>
          {selectedCase.challenges.length > 0 && (
            <section className="project-case-section">
              <h3>{selectedCase.challengeLabel}</h3>
              <ul>
                {selectedCase.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
              </ul>
            </section>
          )}
          {selectedCase.flow && (
            <div className="project-flow" aria-label={selectedCase.flow.join(' → ')}>
              {selectedCase.flow.map((step, index) => (
                <span key={step}>
                  {step}{index < selectedCase.flow!.length - 1 && <i aria-hidden="true">→</i>}
                </span>
              ))}
            </div>
          )}
        </article>

        <article className="book-page book-page--right project-detail-page projects-view">
          <p className="eyebrow">✦ {labels.archive} {selectedCase.number}</p>
          <section className="project-case-section">
            <h3>{labels.participation}</h3>
            <ul>
              {selectedCase.participation.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          {selectedCase.process && (
            <section className="project-case-section">
              <h3>{labels.process}</h3>
              <div className="project-process">
                {selectedCase.process.map((step) => <span key={step}>{step}</span>)}
              </div>
            </section>
          )}
          <section className="project-case-section project-case-result">
            <h3>{labels.result}</h3>
            <p>{selectedCase.result}</p>
          </section>
          <section className="project-case-tools">
            <h3>{labels.tools}</h3>
            <p>{selectedCase.tools.join(' · ')}</p>
          </section>
          <button className="project-back" type="button" onClick={() => setSelectedCaseNumber(null)}>
            {labels.back}
          </button>
        </article>
      </>
    );
  }

  const groupedCases = cases.reduce<Record<string, ProfessionalCase[]>>((groups, item) => {
    (groups[item.group] ??= []).push(item);
    return groups;
  }, {});

  return (
    <>
      <article className="book-page book-page--left projects-index-page projects-view">
        <p className="eyebrow">{intro.chapter}</p>
        <h2>{intro.title}</h2>
        <blockquote className="projects-lead">{intro.lead}</blockquote>
        <p>{intro.description}</p>
        <p className="project-index-label">{labels.cases}</p>

        <div className="project-case-index">
          {Object.entries(groupedCases).map(([group, groupCases]) => (
            <section className="project-case-group" key={group}>
              <h3>{group}</h3>
              {groupCases.map((item) => (
                <button
                  className="project-case-entry"
                  type="button"
                  key={item.number}
                  onClick={() => setSelectedCaseNumber(item.number)}
                >
                  <span className="project-case-number">{item.number}</span>
                  <span className="project-case-summary">
                    <small>{item.category}</small>
                    <strong>{item.title}</strong>
                    <span>{item.summary}</span>
                    <em>{item.tools.join(' · ')}</em>
                  </span>
                  <span className="project-case-action">{labels.open}</span>
                </button>
              ))}
            </section>
          ))}
        </div>
      </article>

      <article className="book-page book-page--right projects-next-page projects-view">
        <p className="eyebrow">{labels.next}</p>
        <h3>{language === 'es' ? 'Próximos volúmenes' : 'Next volumes'}</h3>
        <div className="project-stack">
          {planned.map((item) => (
            <ComingSoonVolume
              key={item.number}
              number={item.number}
              title={item.title}
              stack={item.stack}
              description={item.description}
              language={language}
            />
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
