import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsBookNameValid {
	static execute(request: Request, response: Response, next: NextFunction) {
		const isBookValid = booksDatabase.some(
			(book) => book.name === String(request.body.name)
		);

		if (isBookValid) {
			throw new AppError("Book already registered.", 409);
		}

		next();
	}
}
