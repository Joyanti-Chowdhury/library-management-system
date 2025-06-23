"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./app/controllers/books.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/books", books_controller_1.bookRoutes);
app.get('/', (req, res, next) => {
    res.send('Welcome to Library Management System App');
});
exports.default = app;
