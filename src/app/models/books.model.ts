import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/books.interface";


const bookSchema = new Schema<IBook>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String,
      uppercase: true,
          enum:["FICTION" , "NON-FICTION" , "SCIENCE", "HISTORY" , "BIOGRAPHY" ,"FANTASY"],
          default: "FICTION",
          required: true
       },
    isbn: {type: String, required: true},
    description: {type: String},
    copies: {type: Number, required: true},
    available: {type: Boolean, required: true,
        default: true
    },
      createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
},

{
    versionKey: false,
    timestamps: true
})

bookSchema.pre("save", function (next) {
  this.available = this.copies > 0;
  this.updatedAt = new Date();
  next();
});





bookSchema.statics.availabilityUpdate = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");
  book.copies -= quantity;
  book.available = book.copies > 0;
  await book.save();
};

export  const Data = model<IBook>("Data", bookSchema)