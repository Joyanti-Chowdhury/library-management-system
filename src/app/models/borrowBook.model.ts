import mongoose, { Schema } from "mongoose";


import { IBorrowBook } from "../interfaces/borrowBook.interface";
import { IBookModel } from "../interfaces/books.interface";
import { Data } from "./books.model";

const borrowSchema = new Schema<IBorrowBook>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: [true, "Book ID is required"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "quantity must be a positive number"],
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

borrowSchema.pre("save", async function (next) {
  const book = await Data.findById(this.book);
  if (!book) throw new Error("Book not found");
  if (book.copies < this.quantity) {
    throw new Error("Not enough copies available");
  }
  next();
});

borrowSchema.post("save", async function () {
 
 const BookModel = Data as unknown as IBookModel;
  await BookModel.availabilityUpdate(this.book.toString(), this.quantity);
});

export const Borrow = mongoose.model<IBorrowBook>("Borrow", borrowSchema);


















// import { model, Schema } from "mongoose";
// import { IBorrowBook } from "../interfaces/borrowBook.interface";


// const borrowBookSchema = new Schema<IBorrowBook>(
//     {
//         book:  Schema.Types.ObjectId,
//         quantity: {type: Number, required: true},
//         dueDate: {type: Date, required: true},
//     },
//  {
//     versionKey: false,
//     timestamps: true,
//   }
// )


// export const BorrowBook =model<IBorrowBook>("BorrowBook", borrowBookSchema)