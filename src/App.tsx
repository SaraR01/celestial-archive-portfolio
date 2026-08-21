import { useEffect, useMemo, useRef, useState } from 'react';
import type { BookDefinition, Language } from './types/content';
import { booksEs, homeEs } from './content/es';
import { booksEn, homeEn } from './content/en';
import { profile } from './content/profile';
import { Header } from './components/Header';
import { CelestialBackground } from './components/CelestialBackground';
import { Library } from './components/Library';
import { BookModal } from './components/BookModal';
import { introTimeline, openBookTimeline } from './animations/bookMotion';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [selectedBook, setSelectedBook] = useState<BookDefinition | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pendingBookElement = useRef<HTMLButtonElement | null>(null);

  const books = useMemo(() => (language === 'es' ? booksEs : booksEn), [language]);
  const home = language === 'es' ? homeEs : homeEn;

  useEffect(() => {
    if (!rootRef.current) return;
    const timeline = introTimeline(rootRef.current);
    return () => {
      timeline?.revert();
    };
  }, []);

  useEffect(() => {
    if (!selectedBook || !pendingBookElement.current) return;
    const modal = document.querySelector('.book-modal') as HTMLElement | null;
    if (!modal) return;
    const constellation = modal.querySelector('[data-modal-constellation]') as HTMLElement | null;
    const timeline = openBookTimeline(pendingBookElement.current, modal, constellation);
    return () => {
  timeline?.kill();
  };
  }, [selectedBook]);

  function openBook(book: BookDefinition, element: HTMLButtonElement) {
    pendingBookElement.current = element;
    setSelectedBook(book);
  }

  return (
    <div ref={rootRef} id="top" className="app-shell">
      <div data-library-shell className="library-shell">
        <CelestialBackground />
        <Header language={language} onLanguageChange={setLanguage} />

        <main>
          <section className="hero">
            <div className="hero-copy">
              <p data-hero-kicker className="eyebrow">
                {home.prologue}
              </p>
              <h1 data-hero-title>{home.title}</h1>
              <p data-hero-copy>{home.description}</p>
              <a data-hero-cta href="#library" className="primary-cta">
                {home.cta} →
              </a>
              <p className="hero-quote">{home.quote}</p>
            </div>

            <div className="hero-meta">
              <span>{language === 'es' ? profile.roleEs : profile.roleEn}</span>
              <span>{language === 'es' ? profile.recognitionEs : profile.recognitionEn}</span>
              <span>{profile.location}</span>
            </div>
          </section>

          <Library books={books} language={language} onOpen={openBook} />
        </main>
      </div>

      <BookModal
        book={selectedBook}
        language={language}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
}
