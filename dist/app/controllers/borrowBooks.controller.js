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
exports.borrowBookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrowBook_model_1 = require("../models/borrowBook.model");
exports.borrowBookRoutes = express_1.default.Router();
exports.borrowBookRoutes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = yield borrowBook_model_1.Borrow.create(req.body);
        res.status(201).json({
            Success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            Success: false,
            message: error.message || "Internal Server Error",
            error: error.errors || error.message,
        });
    }
}));
exports.borrowBookRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BorrowBooks = yield borrowBook_model_1.Borrow.aggregate([
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
            message: "Borrowed books summary retrieved successfully",
            data: BorrowBooks,
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            Success: false,
            message: error.message || "Internal Server Error",
            error: error.errors || error.message,
        });
    }
}));
