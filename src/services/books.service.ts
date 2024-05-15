import { booksDatabase, generateId } from "../database/database";
import {
	IBook,
	TBookCreateData,
	TBookUpdateData,
} from "../interfaces/books.interface";

export class BooksService {
	create(data: TBookCreateData) {
		const now = new Date();

		const book: IBook = {
			id: generateId(),
			...data,
			createdAt: now,
			updatedAt: now,
		};

		booksDatabase.push(book);

		return book;
	}

	getMany(search?: string, category?: string) {
		const results =
			search || category
				? booksDatabase.filter((book) => {
						return (
							(category ? category === book.category : true) &&
							(search
								? book.name.toLowerCase().includes(search.toLowerCase())
								: true)
						);
				  })
				: booksDatabase;

		return results;
	}

	getOne(id: number) {
		const book = booksDatabase.find((book) => book.id === id);

		return book;
	}

	update(id: number, data: TBookUpdateData) {
		const currentBook = booksDatabase.find((book) => book.id === id) as IBook;

		const now = new Date();

		const updatedBook: IBook = {
			...currentBook,
			...data,
			updatedAt: now,
		};

		const index = booksDatabase.findIndex((book) => book.id === id);

		booksDatabase.splice(index, 1, updatedBook);

		return updatedBook;
	}

	remove(id: number) {
		const index = booksDatabase.findIndex((book) => book.id === id);

		booksDatabase.splice(index, 1);
	}
}
