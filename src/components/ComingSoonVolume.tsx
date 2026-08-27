interface Props {
  number: string;
  title: string;
  stack: string[];
  description: string;
  language: 'es' | 'en';
}

export function ComingSoonVolume({ number, title, stack, description, language }: Props) {
  return (
    <section className="coming-soon-volume">
      <span className="coming-soon-number">{number}</span>
      <span className="archive-lock" aria-hidden="true">
        <span />
      </span>
      <div>
        <small>
          {language === 'es'
            ? 'PROYECTO PERSONAL · PLANIFICADO'
            : 'PERSONAL PROJECT · PLANNED'}
        </small>
        <h4>{title}</h4>
        <p className="coming-soon-stack">{stack.join(' · ')}</p>
        <span className="coming-soon-status">
          {language === 'es' ? 'ARCHIVO EN PREPARACIÓN' : 'ARCHIVE IN PREPARATION'}
        </span>
        <p className="coming-soon-description">{description}</p>
        <div className="restricted-preview" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </section>
  );
}
