import { useEffect, useRef, useState } from 'react';
import type { BookDefinition, Language } from '../types/content';
import { closeBookTimeline } from '../animations/bookMotion';
import {
  aboutEs, certificationsEs, educationEs, experienceEs, projectsEs, skillsEs,
} from '../content/es';
import {
  aboutEn, certificationsEn, educationEn, experienceEn, projectsEn, skillsEn,
} from '../content/en';
import { AboutContent } from './AboutContent';
import { ExperienceContent } from './ExperienceContent';
import { ProjectsContent } from './ProjectsContent';
import { SkillsContent } from './SkillsContent';
import { EducationContent } from './EducationContent';
import { ContactContent } from './ContactContent';

interface Props {
  book: BookDefinition | null;
  language: Language;
  onClose: () => void;
}

export function BookModal({ book, language, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mobilePage, setMobilePage] = useState<'left' | 'right'>('left');

  useEffect(() => {
    setMobilePage('left');
  }, [book?.id]);

  useEffect(() => {
    if (!book) return;
    document.body.classList.add('book-is-open');
    return () => document.body.classList.remove('book-is-open');
  }, [book]);

  useEffect(() => {
    if (!book) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [book]);

  function handleClose() {
    const modal = modalRef.current;
    if (!modal) {
      onClose();
      return;
    }
    const timeline = closeBookTimeline(modal);
    if (timeline) timeline.eventCallback('onComplete', onClose);
    else onClose();
  }

  if (!book) return null;

  const renderContent = () => {
    if (book.id === 'about') {
      return <AboutContent content={language === 'es' ? aboutEs : aboutEn} language={language} />;
    }
    if (book.id === 'experience') {
      return <ExperienceContent items={language === 'es' ? experienceEs : experienceEn} language={language} />;
    }
    if (book.id === 'projects') {
      return <ProjectsContent items={language === 'es' ? projectsEs : projectsEn} language={language} />;
    }
    if (book.id === 'skills') {
      return <SkillsContent items={language === 'es' ? skillsEs : skillsEn} language={language} />;
    }
    if (book.id === 'education') {
      return (
        <EducationContent
          education={language === 'es' ? educationEs : educationEn}
          certifications={language === 'es' ? certificationsEs : certificationsEn}
          language={language}
        />
      );
    }
    return <ContactContent language={language} />;
  };

  return (
    <div
      ref={modalRef}
      className="book-modal"
      role="dialog"
      aria-modal="true"
      data-page={mobilePage}
    >
      <div className="modal-constellation" data-modal-constellation aria-hidden="true" />
      <button className="modal-close" onClick={handleClose} aria-label="Close">×</button>
      <div className="modal-label">
        ARCHIVO {book.number} / {book.title.toUpperCase()}
      </div>

      <div className="open-book">{renderContent()}</div>

      <div className="mobile-page-controls" aria-label="Book pages">
        <button
          className={mobilePage === 'left' ? 'active' : ''}
          onClick={() => setMobilePage('left')}
        >
          ← {language === 'es' ? 'PÁGINA 1' : 'PAGE 1'}
        </button>
        <button
          className={mobilePage === 'right' ? 'active' : ''}
          onClick={() => setMobilePage('right')}
        >
          {language === 'es' ? 'PÁGINA 2' : 'PAGE 2'} →
        </button>
      </div>

      <button className="modal-back" onClick={handleClose}>
        ← {language === 'es' ? 'VOLVER A LA BIBLIOTECA' : 'BACK TO LIBRARY'}
      </button>
    </div>
  );
}
