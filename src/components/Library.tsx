import type { BookDefinition } from '../types/content';
import { BookCard } from './BookCard';

interface Props {
  books: BookDefinition[];
  onOpen: (book: BookDefinition, element: HTMLButtonElement) => void;
}

export function Library({ books, onOpen }: Props) {
  return (
    <section id="library" className="library">
      <div className="library-books">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onOpen={onOpen} />
        ))}
      </div>
      <div className="library-shelf" />
    </section>
  );
}
