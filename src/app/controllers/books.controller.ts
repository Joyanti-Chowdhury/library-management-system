import express, { Request, Response } from 'express';
import { Book } from '../models/books.model';

export const bookRoutes = express.Router();



bookRoutes.post("/create-book",async (req : Request, res : Response ) => {
    const body = req.body;
      
   
    //noteRoutesroach 1 of creating data
    // const myBook = new Book({
    //     title : "Learning Express",
    //     author : "Joyantichowdhury",
    //     genre : "Fiction",
    //     isbn : "123456789",
    //     description : "This is a book about express",
    //     copies : 10,
    //     available : true
        
    // })

    // await myBook.save()

    const book = await Book.create(body)

    res.status(201).json({
        success: true,
        message: "Book created successfully",
       book
    })
})
bookRoutes.get("/",async (req : Request, res : Response ) => {
   const books = await Book.find()
      
   

    // const note = await Note.create(notes)

    res.status(201).json({
        success: true,
        message: "Book created successfully",
      books
    })
})
bookRoutes.get("/:bookId",async (req : Request, res : Response ) => {
   const bookId  = req.params.bookId;
   const book = await Book.findById(bookId)
      
   
    res.status(201).json({
        success: true,
        message: "Book created successfully",
       book
    })
})
bookRoutes.patch("/:bookId",async (req : Request, res : Response ) => {

   const bookId  = req.params.bookId;
   const updatedBody = req.body
   const book = await Book.findByIdAndUpdate(bookId,updatedBody ,{new: true})
//    const note = await Note.findByIdAndUpdate({_id: noteId},updatedBody ,{new: true})
//    const note = await Note.updateOne({_id: noteId},updatedBody ,{new: true})
      
   
    res.status(201).json({
        success: true,
        message: "Book created successfully",
      book
    })
})
bookRoutes.delete("/:BookId",async (req : Request, res : Response ) => {

   const bookId  = req.params.bookId;
   
   const book = await Book.findByIdAndDelete(bookId)
//    const note = await Note.findByIdAndDelete({_id: noteId})
//    const note = await Note.deleteOne({_id: noteId})
      
   
    res.status(201).json({
        success: true,
        message: "Book deleted successfully",
       book
    })
})
