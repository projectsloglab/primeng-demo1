import { Author } from "./Author";

export class Book {
  id: number;
  name: string;
  genre: string;
  price: number;
  author: Author | null

  constructor() {
    this.id = 0;
    this.name = '';
    this.genre = '';
    this.price = 0;
    this.author = new Author();
  }
}