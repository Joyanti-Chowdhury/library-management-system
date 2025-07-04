import { Model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  // genre: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBookModel extends Model<IBook> {
  availabilityUpdate(bookId: string, quantity: number): Promise<void>;
}
