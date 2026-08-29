import type { PlannedProject, ProjectItem, PublicProject } from '../types/content';
import { projectsIntroEn } from '../content/en';
import { projectsIntroEs } from '../content/es';
import { ComingSoonVolume } from './ComingSoonVolume';

interface Props {
  items: ProjectItem[];
  language: 'es' | 'en';
}

export function ProjectsContent({ items, language }: Props) {
  const planned = items.filter((item): item is PlannedProject => item.status === 'planned');
  const completed = items.filter((item): item is PublicProject => item.status === 'completed');
  const intro = language === 'es' ? projectsIntroEs : projectsIntroEn;
  const labels = language === 'es'
    ? {
        publicProjects: 'PROYECTOS PERSONALES Y PÚBLICOS', problem: 'Problema', solution: 'Solución',
        architecture: 'Arquitectura', stack: 'Stack', demo: 'VER DEMO', github: 'GITHUB',
        next: 'PRÓXIMOS VOLÚMENES', empty: 'Los proyectos públicos terminados aparecerán en este archivo.',
      }
    : {
        publicProjects: 'PERSONAL AND PUBLIC PROJECTS', problem: 'Problem', solution: 'Solution',
        architecture: 'Architecture', stack: 'Stack', demo: 'VIEW DEMO', github: 'GITHUB',
        next: 'NEXT VOLUMES', empty: 'Completed public projects will appear in this archive.',
      };

  return (
    <>
      <article className="book-page book-page--left projects-index-page projects-view">
        <p className="eyebrow">{intro.chapter}</p>
        <h2>{intro.title}</h2>
        <blockquote className="projects-lead">{intro.lead}</blockquote>
        <p>{intro.description}</p>
        <p className="project-index-label">{labels.publicProjects}</p>
        {completed.length === 0 ? (
          <p className="projects-empty-note">{labels.empty}</p>
        ) : (
          <div className="public-project-list">
            {completed.map((project) => (
              <section className="public-project" key={project.number}>
                <small>{language === 'es' ? 'PROYECTO' : 'PROJECT'} {project.number}</small>
                <h3>{project.title}</h3>
                <dl>
                  <div><dt>{labels.problem}</dt><dd>{project.problem}</dd></div>
                  <div><dt>{labels.solution}</dt><dd>{project.solution}</dd></div>
                  <div><dt>{labels.architecture}</dt><dd>{project.architecture}</dd></div>
                  <div><dt>{labels.stack}</dt><dd>{project.stack.join(' · ')}</dd></div>
                </dl>
                <div className="public-project-actions">
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">{labels.demo}</a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">{labels.github}</a>}
                </div>
              </section>
            ))}
          </div>
        )}
      </article>

      <article className="book-page book-page--right projects-next-page projects-view">
        <p className="eyebrow">{labels.next}</p>
        <h3>{language === 'es' ? 'Próximos volúmenes' : 'Next volumes'}</h3>
        <div className="project-stack">
          {planned.map((item) => (
            <ComingSoonVolume key={item.number} number={item.number} title={item.title} stack={item.stack} description={item.description} language={language} />
          ))}
        </div>
        <div className="dark-principle">
          <small>{language === 'es' ? 'PRINCIPIO' : 'PRINCIPLE'}</small>
          <p>{language === 'es' ? 'Problema → Investigación → Solución → Resultado' : 'Problem → Research → Solution → Result'}</p>
        </div>
      </article>
    </>
  );
}
