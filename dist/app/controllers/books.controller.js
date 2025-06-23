"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_model_1 = require("../models/books.model");
exports.bookRoutes = express_1.default.Router();
exports.bookRoutes.post("/create-book", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const data = yield books_model_1.Data.create(body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Validation Failed",
            success: false,
            error
        });
    }
}));
exports.bookRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookGenre = req.query.genre ? req.query.genre : "";
        console.log(bookGenre);
        //    const data = await Data.find()
        let data = [];
        if (bookGenre) {
            data = yield books_model_1.Data.find({ genre: bookGenre });
        }
        else {
            data = yield books_model_1.Data.find();
        }
        data = yield books_model_1.Data.find().sort({ createdAt: 1 });
        data = yield books_model_1.Data.find().limit(5);
        res.status(201).json({
            success: true,
            message: "Book retrieved successfully",
            data
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Validation Failed",
            success: false,
            error
        });
    }
}));
exports.bookRoutes.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield books_model_1.Data.findById(bookId);
        res.status(201).json({
            success: true,
            message: "Book retrieved successfully",
            data
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Validation Failed",
            success: false,
            error
        });
    }
}));
exports.bookRoutes.patch("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const updatedBody = req.body;
        const data = yield books_model_1.Data.findByIdAndUpdate(bookId, updatedBody, { new: true });
        res.status(201).json({
            success: true,
            message: "Book  updated  successfully",
            data
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Update Validation Failed",
            success: false,
            error
        });
    }
}));
// bookRoutes.post("/borrow", async (req : Request, res : Response ) => {
//  try {
//     const { book: bookId, quantity, dueDate } = req.body;
//     const book = await Data.findById(bookId);
//     if (!book) {
//       return res.status(404).json({ success: false, message: 'Book not found' });
//     }
//     if (book.copies < quantity) {
//       return res.status(400).json({ success: false, message: 'Not enough copies available' });
//     }
//     // Update book copies and availability
//     book.copies -= quantity;
//     book.updateAvailability();
//     await book.save();
//     // Create borrow record
//     const borrowRecord = await BorrowBook.create({ book: bookId, quantity, dueDate });
//     return res.status(201).json({
//       success: true,
//       message: 'Book borrowed successfully',
//       data: borrowRecord
//     });
//   } catch (error) {
//     console.error('Borrow error:', error);
//     return res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// })
exports.bookRoutes.delete("/:BookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield books_model_1.Data.findByIdAndDelete(bookId);
        res.status(201).json({
            success: true,
            message: "Book deleted successfully",
            data
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Delete Validation Failed",
            success: false,
            error
        });
    }
}));
