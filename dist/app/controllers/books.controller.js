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
    const book = yield books_model_1.Book.create(body);
    res.status(201).json({
        success: true,
        message: "Book created successfully",
        book
    });
}));
exports.bookRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield books_model_1.Book.find();
    // const note = await Note.create(notes)
    res.status(201).json({
        success: true,
        message: "Book created successfully",
        books
    });
}));
exports.bookRoutes.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = yield books_model_1.Book.findById(bookId);
    res.status(201).json({
        success: true,
        message: "Book created successfully",
        book
    });
}));
exports.bookRoutes.patch("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const book = yield books_model_1.Book.findByIdAndUpdate(bookId, updatedBody, { new: true });
    //    const note = await Note.findByIdAndUpdate({_id: noteId},updatedBody ,{new: true})
    //    const note = await Note.updateOne({_id: noteId},updatedBody ,{new: true})
    res.status(201).json({
        success: true,
        message: "Book created successfully",
        book
    });
}));
exports.bookRoutes.delete("/:BookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.bookId;
    const book = yield books_model_1.Book.findByIdAndDelete(bookId);
    //    const note = await Note.findByIdAndDelete({_id: noteId})
    //    const note = await Note.deleteOne({_id: noteId})
    res.status(201).json({
        success: true,
        message: "Book deleted successfully",
        book
    });
}));
