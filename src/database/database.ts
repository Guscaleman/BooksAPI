import { IBook } from "../interfaces/books.interface";

export const booksDatabase: IBook[] = [];

let id = 0;

export function generateId() {
	id++;

	return id;
}
