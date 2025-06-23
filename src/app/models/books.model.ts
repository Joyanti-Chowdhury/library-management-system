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
},

{
    versionKey: false,
    timestamps: true
})


export  const Data = model<IBook>("Data", bookSchema)