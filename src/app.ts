import express, { Application, NextFunction, request, Request, Response } from 'express';
import { bookRoutes } from './app/controllers/books.controller';
import { borrowBookRoutes } from './app/controllers/borrowBooks.controller';
import cors from 'cors'



const app: Application = express();

app.use(
  cors({
    origin: 
      [
        "http://localhost:5173",
        "https://mellifluous-cocada-d99bf4.netlify.app"
        
      ],
       

    //  credentials: true,
  })
);

app.use(express.json());
app.use("/api/books", bookRoutes),
app.use("/api/borrow", borrowBookRoutes);


app.get('/' ,( req : Request, res : Response, next : NextFunction) => {
    res.send('Welcome to Library Management System App')
})
export default app;

