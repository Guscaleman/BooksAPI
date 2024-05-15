import { Router } from "express";
import { BookController } from "../controllers/books.controller";
import { IsBookIdValid } from "../middleware/isBookIdValid.middleware";
import { IsBookNameValid } from "../middleware/isBookNameValid.middleware";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { createBookSchema, updateBookSchema } from "../schemas/books.schema";

export const bookRouter = Router();

const bookController = new BookController();

bookRouter.post(
	"/",
	ValidateBody.execute(createBookSchema),
	IsBookNameValid.execute,
	bookController.create
);
bookRouter.get("/", bookController.getMany);
bookRouter.get("/:id", IsBookIdValid.execute, bookController.getOne);
bookRouter.patch(
	"/:id",
	ValidateBody.execute(updateBookSchema),
	IsBookNameValid.execute,
	IsBookIdValid.execute,
	bookController.update
);
bookRouter.delete("/:id", IsBookIdValid.execute, bookController.remove);
