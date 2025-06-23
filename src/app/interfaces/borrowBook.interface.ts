import { Types } from "mongoose"

export interface IBorrowBook {
    book:Types.ObjectId
    // title: string,
    // author: string,
    // genre: string,
    // isbn: string,
    // description: string,
    // copies: number,
    // available: boolean,
    // borrowedBy: string,
    // borrowedDate: Date,
      updateAvailability(): void;
    quantity: number,
    dueDate: Date
}