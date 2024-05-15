import { Request, Response } from "express";
import { BooksService } from "../services/books.service";

export class BookController {
	create(request: Request, response: Response) {
		const bookService = new BooksService();

		const book = bookService.create(request.body);

		return response.status(201).json(book);
	}

	getMany(request: Request, response: Response) {
		const bookService = new BooksService();

		const books = bookService.getMany(
			request.query.search as string,
			request.query.category as string
		);

		return response.status(200).json(books);
	}

	getOne(request: Request, response: Response) {
		const bookService = new BooksService();

		const book = bookService.getOne(Number(request.params.id));

		return response.status(200).json(book);
	}

	update(request: Request, response: Response) {
		const bookService = new BooksService();

		const book = bookService.update(Number(request.params.id), request.body);

		return response.status(200).json(book);
	}

	remove(request: Request, response: Response) {
		const bookService = new BooksService();

		bookService.remove(Number(request.params.id));

		return response.status(204).json();
	}
}
