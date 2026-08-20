import { profile } from '../content/profile';

interface Props {
  language: 'es' | 'en';
}

export function ContactContent({ language }: Props) {
  return (
    <>
      <article className="book-page book-page--left letter-page">
        <p className="eyebrow">{language === 'es' ? 'CAPÍTULO VI' : 'CHAPTER VI'}</p>
        <h2>{language === 'es' ? 'El siguiente capítulo' : 'The next chapter'}</h2>
        <p className="letter-copy">
          {language === 'es'
            ? 'Si mi experiencia, mi forma de pensar o alguno de mis proyectos encaja con lo que estás construyendo, podemos conversar.'
            : 'If my experience, way of thinking or one of my projects fits what you are building, we can talk.'}
        </p>
        <p className="signature">Sara Retana Pérez</p>
        <div className="letter-seal">SRP</div>
      </article>

      <article className="book-page book-page--right">
        <p className="eyebrow">{language === 'es' ? 'CONTACTO' : 'CONTACT'}</p>
        <h3>{language === 'es' ? 'Abramos una conversación' : 'Start a conversation'}</h3>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>EMAIL <span>↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a>
          <a href={profile.cv} download>
            {language === 'es' ? 'DESCARGAR CV' : 'DOWNLOAD CV'} <span>↓</span>
          </a>
        </div>
        <div className="contact-note">
          <small>{language === 'es' ? 'SIN FORMULARIOS · SIN BACKEND' : 'NO FORMS · NO BACKEND'}</small>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.location}</p>
        </div>
      </article>
    </>
  );
}
