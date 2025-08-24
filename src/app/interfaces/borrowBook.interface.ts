

import { Document,  Types } from "mongoose";

export interface IBorrowBook extends Document {
  book: Types.ObjectId;
  user: Types.ObjectId;
  quantity: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
