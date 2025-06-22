import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/books.interface";


const bookSchema = new Schema<IBook>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String,
          enum:["Fiction" , "Non-Fiction" ,"science","histroy" , "Biography" ,"Fantasy"],
          default: "Fiction",
          required: true
       },
    isbn: {type: String, required: true},
    description: {type: String},
    copies: {type: Number, required: true},
    available: {type: Boolean, required: true,
        default: true
    },
},

{
    versionKey: false,
    timestamps: true
})


export  const Book = model<IBook>("Book", bookSchema)