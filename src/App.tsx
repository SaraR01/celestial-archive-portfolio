import { useEffect, useMemo, useRef, useState } from 'react';
import type { BookDefinition, Language } from './types/content';
import { booksEs } from './content/es';
import { booksEn } from './content/en';
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

  useEffect(() => {
    if (!rootRef.current) return;
    const timeline = introTimeline(rootRef.current);
    return () => {
    timeline?.kill();
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
                {language === 'es' ? 'PRÓLOGO / 00' : 'PROLOGUE / 00'}
              </p>
              <h1 data-hero-title>
                {language === 'es' ? 'El Archivo Celestial' : 'The Celestial Archive'}
              </h1>
              <p data-hero-copy>
                {language === 'es'
                  ? 'Tecnología, investigación y propósito. Una colección de capítulos construidos con curiosidad, disciplina y la decisión de ir siempre un poco más allá.'
                  : 'Technology, research and purpose. A collection of chapters built with curiosity, discipline and the decision to always go a little further.'}
              </p>
              <a data-hero-cta href="#library" className="primary-cta">
                {language === 'es' ? 'EXPLORAR EL ARCHIVO' : 'EXPLORE THE ARCHIVE'} →
              </a>
              <p className="hero-quote">
                {language === 'es'
                  ? '“Siempre hay algo nuevo que descubrir.”'
                  : '“There is always something new to discover.”'}
              </p>
            </div>

            <div className="hero-meta">
              <span>{profile.roleEs}</span>
              <span>{profile.recognitionEs}</span>
              <span>{profile.location}</span>
            </div>
          </section>

          <Library books={books} onOpen={openBook} />
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
