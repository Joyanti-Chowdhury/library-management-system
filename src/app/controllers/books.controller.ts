import express, { Request, Response } from 'express';
import {  Data } from '../models/books.model';


export const bookRoutes = express.Router();



bookRoutes.post("/create-book",async (req : Request, res : Response ) => {
  try {
      const body = req.body;
    const data = await Data.create(body)

    res.status(201).json({
        success: true,
        message: "Book created successfully",
     data
    })
  } catch (error : any) {
    console.log(error)
    res.status(400).json({
      
        message: "Validation Failed",
          success: false,
        error
    })
  }
})


bookRoutes.get("/",async (req : Request, res : Response ) => {
   try {
    const bookGenre  =  req.query.genre ? req.query.genre : "";
    console.log(bookGenre)
//    const data = await Data.find()
 let data = []
    if (bookGenre) {
          data = await Data.find({genre:bookGenre})
    } else {
        data = await Data.find()
    }
   
    data = await Data.find().sort({createdAt: 1})
    data = await Data.find().limit(5)

    res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
    data
    })
   } catch (error) {
    console.log(error)
    res.status(400).json({
      
        message: "Validation Failed",
          success: false,
        error
    })
   }
})
bookRoutes.get("/:bookId",async (req : Request, res : Response ) => {
   try {
    const bookId  = req.params.bookId;
   const data = await Data.findById(bookId)
      
   
    res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
       data
    })
   } catch (error) {
     console.log(error)
    res.status(400).json({
      
        message: "Validation Failed",
          success: false,
        error
    })
   }
})
bookRoutes.put("/:bookId",async (req : Request, res : Response ) => {

  try {
     const bookId  = req.params.bookId;
   const updatedBody = req.body
   const data = await Data.findByIdAndUpdate(bookId,updatedBody ,{new: true})
      
   
    res.status(201).json({
        success: true,
        message: "Book  updated  successfully",
     data
    })
  } catch (error) {
     console.log(error)
    res.status(400).json({
      
        message: "Update Validation Failed",
          success: false,
        error
    })
  }
})







bookRoutes.delete("/:BookId",async (req : Request, res : Response ) => {

  try {
     const bookId  = req.params.bookId;
   
   const data = await Data.findByIdAndDelete(bookId)

   
    res.status(201).json({
        success: true,
        message: "Book deleted successfully",
     data
    })
  } catch (error) {
     console.log(error)
    res.status(400).json({
      
        message: "Delete Validation Failed",
          success: false,
        error
    })
  }
})
