"use strict";
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
}, {
    versionKey: false,
    timestamps: true
});
exports.Data = (0, mongoose_1.model)("Data", bookSchema);
