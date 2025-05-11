import { Author } from "@/types/book.type";

const authors: Author[] = [
  {
    id: 1,
    name: "Matt Haig",
    biography:
      "Matt Haig is a British author for children and adults. His memoir Reasons to Stay Alive was a number one bestseller.",
    photo: "/images/authors/matt-haig.jpg",
    birthDate: new Date("1975-07-03"),
  },
  {
    id: 2,
    name: "Frank Herbert",
    biography:
      "Frank Herbert was an American science fiction writer best known for the novel Dune and its five sequels.",
    photo: "/images/authors/frank-herbert.jpg",
    birthDate: new Date("1920-10-08"),
  },
  {
    id: 3,
    name: "Alex Michaelides",
    biography:
      "Alex Michaelides is a British-Cypriot author, screenwriter, and photographer. His debut novel, the psychological thriller The Silent Patient, is a New York Times and Sunday Times bestseller.",
    photo: "/images/authors/alex-michaelides.jpg",
  },
  {
    id: 4,
    name: "James Clear",
    biography:
      "James Clear is an American author, entrepreneur, and photographer whose work on habits and human potential has appeared in the New York Times, Entrepreneur, Time, and on CBS.",
    photo: "/images/authors/james-clear.jpg",
  },
  {
    id: 5,
    name: "Delia Owens",
    biography:
      "Delia Owens is an American wildlife scientist and author of the acclaimed novel Where the Crawdads Sing.",
    photo: "/images/authors/delia-owens.jpg",
    birthDate: new Date("1949-04-04"),
  },
  {
    id: 6,
    name: "TJ Klune",
    biography:
      "TJ Klune is an American author of LGBTQ+ fiction and speculative fiction.",
    photo: "/images/authors/tj-klune.jpg",
  },
  {
    id: 7,
    name: "R.F. Kuang",
    biography:
      "Rebecca F. Kuang is a Chinese-American fantasy writer. She is known for her Poppy War trilogy.",
    photo: "/images/authors/rf-kuang.jpg",
    birthDate: new Date("1996-05-29"),
  },
  {
    id: 8,
    name: "Eric Carle",
    biography:
      "Eric Carle was an American designer, illustrator, and writer of children's books, known best for The Very Hungry Caterpillar.",
    photo: "/images/authors/eric-carle.jpg",
    birthDate: new Date("1929-06-25"),
  },
  {
    id: 9,
    name: "Paulo Coelho",
    biography:
      "Paulo Coelho is a Brazilian lyricist and novelist, best known for his novel The Alchemist.",
    photo: "/images/authors/paulo-coelho.jpg",
    birthDate: new Date("1947-08-24"),
  },
];

export default authors;
