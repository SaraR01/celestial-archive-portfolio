import { useRef, useState } from 'react';
import type { BookDefinition, Language } from '../types/content';
import { BookCard } from './BookCard';

interface Props {
  books: BookDefinition[];
  language: Language;
  onOpen: (book: BookDefinition, element: HTMLButtonElement) => void;
}

export function Library({ books, language, onOpen }: Props) {
  const booksRef = useRef<HTMLDivElement>(null);
  const [activeBook, setActiveBook] = useState(0);

  function updateActiveBook(container: HTMLDivElement) {
    const center = container.scrollLeft + container.clientWidth / 2;
    const cards = Array.from(container.children) as HTMLElement[];
    const closestIndex = cards.reduce((closest, card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const closestCard = cards[closest];
      const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2;
      return Math.abs(cardCenter - center) < Math.abs(closestCenter - center)
        ? index
        : closest;
    }, 0);

    setActiveBook(closestIndex);
  }

  function scrollToBook(index: number) {
    const container = booksRef.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }

  return (
    <section id="library" className="library">
      <div
        ref={booksRef}
        className="library-books"
        onScroll={(event) => updateActiveBook(event.currentTarget)}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} language={language} onOpen={onOpen} />
        ))}
      </div>
      <div className="library-shelf" />
      <div className="library-navigation">
        <span aria-hidden="true">← {language === 'es' ? 'desliza' : 'swipe'} →</span>
        <div
          className="library-dots"
          aria-label={language === 'es' ? 'Navegación de libros' : 'Book navigation'}
        >
          {books.map((book, index) => (
            <button
              key={book.id}
              type="button"
              className={index === activeBook ? 'active' : ''}
              aria-label={
                language === 'es'
                  ? `Ir al libro ${index + 1}: ${book.title}`
                  : `Go to book ${index + 1}: ${book.title}`
              }
              aria-current={index === activeBook ? 'true' : undefined}
              onClick={() => scrollToBook(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
