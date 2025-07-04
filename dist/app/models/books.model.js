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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String,
        uppercase: true,
        enum: ["FICTION", "NON-FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
        default: "FICTION",
        required: true
    },
    isbn: { type: String, required: true },
    description: { type: String },
    copies: { type: Number, required: true },
    available: { type: Boolean, required: true,
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
}, {
    versionKey: false,
    timestamps: true
});
bookSchema.pre("save", function (next) {
    this.available = this.copies > 0;
    this.updatedAt = new Date();
    next();
});
bookSchema.statics.availabilityUpdate = function (bookId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield this.findById(bookId);
        if (!book)
            throw new Error("Book not found");
        book.copies -= quantity;
        book.available = book.copies > 0;
        yield book.save();
    });
};
exports.Data = (0, mongoose_1.model)("Data", bookSchema);
