"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./app/controllers/books.controller");
const borrowBooks_controller_1 = require("./app/controllers/borrowBooks.controller");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://mellifluous-cocada-d99bf4.netlify.app/"
    ],
    //  credentials: true,
}));
app.use(express_1.default.json());
app.use("/api/books", books_controller_1.bookRoutes),
    app.use("/api/borrow", borrowBooks_controller_1.borrowBookRoutes);
app.get('/', (req, res, next) => {
    res.send('Welcome to Library Management System App');
});
exports.default = app;
