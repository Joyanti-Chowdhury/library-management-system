import express, { Application, NextFunction, request, Request, Response } from 'express';
import { bookRoutes } from './app/controllers/books.controller';
import { borrowBookRoutes } from './app/controllers/borrowBooks.controller';



const app: Application = express();


app.use(express.json());
app.use("/api/books", bookRoutes),
app.use("/api/borrow", borrowBookRoutes);







app.get('/' ,( req : Request, res : Response, next : NextFunction) => {
    res.send('Welcome to Library Management System App')
})
export default app;