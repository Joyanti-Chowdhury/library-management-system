import { model, Schema } from "mongoose";
import { IBorrowBook } from "../interfaces/borrowBook.interface";


const borrowBookSchema = new Schema<IBorrowBook>(
    {
        book:  Schema.Types.ObjectId,
        quantity: {type: Number, required: true},
        dueDate: {type: Date, required: true},
    },
 {
    versionKey: false,
    timestamps: true,
  }
)


export const BorrowBook =model<IBorrowBook>("BorrowBook", borrowBookSchema)