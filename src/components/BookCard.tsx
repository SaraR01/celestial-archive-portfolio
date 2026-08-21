import type { BookDefinition, Language } from '../types/content';

interface Props {
  book: BookDefinition;
  language: Language;
  onOpen: (book: BookDefinition, element: HTMLButtonElement) => void;
}

export function BookCard({ book, language, onOpen }: Props) {
  return (
    <button
      className={`book-card book-card--${book.tone}`}
      data-book
      onClick={(event) => onOpen(book, event.currentTarget)}
      aria-label={language === 'es' ? `Abrir ${book.title}` : `Open ${book.title}`}
    >
      <span className="book-spine" aria-hidden="true" />
      <span className="book-number">{book.number}</span>
      <span className="book-star" aria-hidden="true">✦</span>
      <strong>{book.title}</strong>
      <span className="book-rule" />
      <small>{book.subtitle}</small>
    </button>
  );
}
