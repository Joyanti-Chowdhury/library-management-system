import {Server} from "http"
import app from "./app";
import mongoose from "mongoose";



let server : Server;
const PORT = 5000

async function main() {
    try {
        await mongoose.connect('mongodb+srv://joyanti:joyanti@cluster0.n0rkl.mongodb.net/Library-management-system?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to Mongo Db using mongoose")
         server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
    } catch (error) {
        console.log(error)
    }
}


main()