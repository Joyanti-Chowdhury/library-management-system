import express, { Application, NextFunction, request, Request, Response } from 'express';
import { bookRoutes } from './app/controllers/books.controller';



const app: Application = express();


app.use(express.json());
app.use("/books", bookRoutes)







app.get('/' ,( req : Request, res : Response, next : NextFunction) => {
    res.send('Welcome to Library Management System App')
})
export default app;