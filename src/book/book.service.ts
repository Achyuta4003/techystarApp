import { Injectable } from '@nestjs/common';
import { Book } from './dto/bok.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been successfully added';
  }

  //update book
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });

    this.books[index] = book;
    return 'Book has been successfully updated';
  }

  //delete book
  deleteBookService(id: string): string {
    this.books = this.books.filter((book) => book.id !== id);
    return 'Book has been successfully deleted';
  }

  //find all books
  findAllBookService(): Book[] {
    return this.books;
  }
}
