import express, { Request, Response } from "express";
import { Borrow } from '../models/borrowBook.model';

const borrowBookRoutes = express.Router();


borrowBookRoutes.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const borrow = await Borrow.create(req.body);
    res.status(201).json({
      Success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error: any) {
    res.status(error.status || 500).json({
      Success: false,
      message: error.message || "Internal Server Error",
      error: error.errors || error.message,
    });
  }
});


borrowBookRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const BorrowBooksSummary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
          totalQuantity: "$totalQuantity",
        },
      },
    ]);
    res.status(200).json({
      Success: true,
      message: "Borrowed books updated successfully",
      data: BorrowBooksSummary,
    });
  } catch (error: any) {
    res.status(error.status || 500).json({
      Success: false,
      message: error.message || "Internal Server Error",
      error: error.errors || error.message,
    });
  }
});

export  {borrowBookRoutes};