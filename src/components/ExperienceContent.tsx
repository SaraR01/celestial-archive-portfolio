import { useState } from 'react';
import { projectsEn } from '../content/en';
import { projectsEs } from '../content/es';
import type { ExperienceItem, ProfessionalCase } from '../types/content';

interface Props {
  items: ExperienceItem[];
  language: 'es' | 'en';
}

const resultStampByCase: Record<string, { es: string; en: string }> = {
  '04': { es: 'REMEDIACIÓN COMPLETADA ✓', en: 'REMEDIATION COMPLETED ✓' },
  '05': { es: 'CASO CERRADO ✓', en: 'CASE CLOSED ✓' },
  '06': { es: 'PRODUCCIÓN ✓', en: 'PRODUCTION ✓' },
};

export function ExperienceContent({ items, language }: Props) {
  const [selectedCaseNumber, setSelectedCaseNumber] = useState<string | null>(null);
  const cases = (language === 'es' ? projectsEs : projectsEn)
    .filter((item): item is ProfessionalCase => item.status === 'case');
  const selectedCase = cases.find((item) => item.number === selectedCaseNumber) ?? null;
  const labels = language === 'es'
    ? {
        chapter: 'CAPÍTULO II', title: 'Experiencia', intro: 'Trayectoria, objetivos, resultados y casos demostrativos.',
        objectives: 'OBJETIVOS', results: 'LOGROS', related: 'EXPEDIENTES RELACIONADOS', client: 'Cliente', scope: 'ROL Y ALCANCE', impact: 'IMPACTO / ALCANCE',
        open: 'Abrir expediente →', file: 'EXPEDIENTE', context: 'Contexto', participation: 'Mi participación',
        objective: 'Objetivo', responsibility: 'Alcance / Responsabilidad', strategy: 'Estrategia', coordination: 'Coordinación',
        process: 'Proceso', result: 'Resultado', tools: 'Stack / Herramientas', back: '← Volver a experiencia',
        internship: 'PASANTÍA', main: 'EXPERIENCIA PRINCIPAL',
      }
    : {
        chapter: 'CHAPTER II', title: 'Experience', intro: 'A professional journey through objectives, outcomes and demonstrative cases.',
        objectives: 'OBJECTIVES', results: 'ACHIEVEMENTS', related: 'RELATED CASE FILES', client: 'Client', scope: 'ROLE & SCOPE', impact: 'IMPACT / SCOPE',
        open: 'Open case file →', file: 'FILE', context: 'Context', participation: 'My contribution',
        objective: 'Objective', responsibility: 'Scope / Responsibility', strategy: 'Strategy', coordination: 'Coordination',
        process: 'Process', result: 'Outcome', tools: 'Stack / Tools', back: '← Back to experience',
        internship: 'INTERNSHIP', main: 'MAIN EXPERIENCE',
      };

  if (selectedCase) {
    const stamp = resultStampByCase[selectedCase.number]?.[language];
    return (
      <>
        <article className="book-page book-page--left project-detail-page experience-view">
          <p className="eyebrow">{labels.file} / {selectedCase.number}</p>
          <p className="project-case-category">{selectedCase.category}</p>
          <h2>{selectedCase.title}</h2>
          {selectedCase.subtitle && <p className="project-case-subtitle">{selectedCase.subtitle}</p>}
          {selectedCase.meta && <p className="project-case-meta"><strong>{selectedCase.metaLabel}</strong> · {selectedCase.meta}</p>}
          <section className="project-case-section">
            <h3>{labels.context}</h3>
            <p>{selectedCase.context}</p>
          </section>
          {selectedCase.objective && <section className="project-case-section"><h3>{labels.objective}</h3><p>{selectedCase.objective}</p></section>}
          {selectedCase.challenges.length > 0 && (
            <section className="project-case-section">
              <h3>{selectedCase.challengeLabel}</h3>
              <ul>{selectedCase.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
            </section>
          )}
          {selectedCase.flow && (
            <div className="project-flow" aria-label={selectedCase.flow.join(' → ')}>
              {selectedCase.flow.map((step, index) => (
                <span key={step}>{step}{index < selectedCase.flow!.length - 1 && <i aria-hidden="true">→</i>}</span>
              ))}
            </div>
          )}
        </article>

        <article className="book-page book-page--right project-detail-page experience-view">
          <p className="eyebrow">✦ {labels.file} {selectedCase.number}</p>
          {selectedCase.scope && <section className="project-case-section"><h3>{labels.responsibility}</h3><ul>{selectedCase.scope.map((item) => <li key={item}>{item}</li>)}</ul></section>}
          <section className="project-case-section"><h3>{selectedCase.strategy ? labels.strategy : labels.participation}</h3><ul>{(selectedCase.strategy ?? selectedCase.participation).map((item) => <li key={item}>{item}</li>)}</ul></section>
          {selectedCase.coordination && <section className="project-case-section"><h3>{labels.coordination}</h3><ul>{selectedCase.coordination.map((item) => <li key={item}>{item}</li>)}</ul></section>}
          {selectedCase.process && (
            <section className="project-case-section">
              <h3>{labels.process}</h3>
              <div className="project-process">{selectedCase.process.map((step) => <span key={step}>{step}</span>)}</div>
            </section>
          )}
          <section className="project-case-section project-case-result">
            <h3>{labels.result}</h3>
            <p>{selectedCase.result}</p>
          </section>
          {stamp && <div className="experience-result-stamp"><small>{labels.result}</small><strong>{stamp}</strong></div>}
          <section className="project-case-tools">
            <h3>{labels.tools}</h3>
            <p>{selectedCase.tools.join(' · ')}</p>
          </section>
          <button className="project-back" type="button" onClick={() => setSelectedCaseNumber(null)}>{labels.back}</button>
        </article>
      </>
    );
  }

  const renderExperience = (item: ExperienceItem) => (
    <section className={`experience-entry experience-entry--${item.kind}`} key={`${item.company}-${item.period}`}>
      <span className="timeline-dot" aria-hidden="true" />
      <small className="experience-period">{item.period}</small>
      <span className="experience-kind">{item.kind === 'primary' ? labels.main : labels.internship}</span>
      <h3>{item.company}</h3>
      {item.client && <p className="experience-client"><span>{labels.client}:</span> {item.client}</p>}
      <strong className="experience-role">{item.role}</strong>
      <div className="experience-scope"><h4>{labels.scope}</h4><p>{item.focus}</p></div>
      {item.indicators && (
        <div className="experience-impact" aria-label={labels.impact}>
          {item.indicators.map((indicator) => <div key={indicator.label}><strong>{indicator.value}</strong><span>{indicator.label}</span></div>)}
        </div>
      )}
      <div className="experience-columns">
        <div>
          <h4>{labels.objectives}</h4>
          <ul>{item.points.slice(0, 5).map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
        <div>
          <h4>{labels.results}</h4>
          <ul>{item.results.slice(0, 4).map((result) => <li key={result}>{result}</li>)}</ul>
        </div>
      </div>
      {item.caseNumbers && (
        <div className="experience-cases">
          <h4>{labels.related}</h4>
          {item.caseNumbers.map((number) => {
            const relatedCase = cases.find((itemCase) => itemCase.number === number);
            return relatedCase ? (
              <button type="button" className="experience-case-link" key={number} onClick={() => setSelectedCaseNumber(number)}>
                <span>{labels.file} {number}</span>
                <strong>{relatedCase.title}</strong>
                <em>{labels.open}</em>
              </button>
            ) : null;
          })}
        </div>
      )}
    </section>
  );

  return (
    <>
      <article className="book-page book-page--left experience-index-page experience-view">
        <p className="eyebrow">{labels.chapter}</p>
        <h2>{labels.title}</h2>
        <p className="experience-intro">{labels.intro}</p>
        <div className="experience-timeline">{items.slice(0, 1).map(renderExperience)}</div>
      </article>
      <article className="book-page book-page--right experience-index-page experience-view">
        <p className="eyebrow">{language === 'es' ? 'TRAYECTORIA' : 'JOURNEY'}</p>
        <div className="experience-timeline">{items.slice(1).map(renderExperience)}</div>
      </article>
    </>
  );
}
