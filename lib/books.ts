import authors from "@/data/authors";
import books from "@/data/books";
import bookGenres from "@/data/genres";
import publishers from "@/data/publishers";

export const getBook = (slug: string) =>
  books.find((item) => item.slug === slug);

export const findAuthor = (id: number) =>
  authors.find((item) => item.id === id);

export const findPublisher = (id: number) =>
  publishers.find((item) => item.id === id);

export const findGenres = (genreIds: number[]) =>
  bookGenres.filter((item) => genreIds.includes(item.id));
