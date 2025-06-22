# 📚 Library Management System

A robust and scalable **Library Management System** built with **Node.js**, **Express**, **TypeScript**, **MongoDB**, and **Mongoose**. This application provides RESTful APIs to manage books, members, borrowing records, and more.

---

## 🚀 Features

- 📘 Book management (Add, Edit, Delete, List)
- 👤 Member management
- 📅 Borrowing and returning records
- 📊 Track book availability
- 🛡️ Input validation and error handling

- 🧪 Unit and integration tests
- 📂 MVC architecture with modular code structure

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime environment
- **Express** – Web framework
- **TypeScript** – Static typing for maintainability
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB


---

## 📁 Project Structure
src/
├── app/
├── controllers/ # Route logic
├── interfaces
├── models/ # Mongoose schemas
├── app.ts # Express app setup
└── server.ts # Server entry point


---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system


2. **Install Dependencies**

npm install

1. **Run the server in development**
```bash
git clone https://github.com/Joyanti-Chowdhury/library-management-system
cd library-management-system



📬 API Endpoints

Books
GET http://localhost:5000/books – Get all books

POST http://localhost:5000/books/create-book – Add a new book

PUT http://localhost:5000/books/:bookId – Update a book

DELETE http://localhost:5000/books/:bookId – Delete a book

Members
GET /api/members – List members

POST /api/members – Add member

Borrowing
POST /api/borrow – Borrow a book

POST /api/return – Return a book

(More detailed API documentation can be generated using Swagger/Postman collection)

 project vedio link
 https://drive.google.com/drive/u/0/folders/1ib4-m6j6rAsPju3zHOa9upmLxhJN49a2?lfhs=2
