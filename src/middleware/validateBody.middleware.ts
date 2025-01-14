import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class ValidateBody {
	static execute(schema: ZodSchema) {
		return (request: Request, response: Response, next: NextFunction) => {
			schema.parse(request.body);

			next();
		};
	}
}
