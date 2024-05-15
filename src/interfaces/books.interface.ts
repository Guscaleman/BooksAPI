import { z } from "zod";
import { bookSchema } from "../schemas/books.schema";

export type IBook = z.infer<typeof bookSchema>;

export type TBookCreateData = Pick<IBook, "name" | "pages" | "category">;
export type TBookUpdateData = Partial<TBookCreateData>;
