import express from "express";
import books from "../data/books.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(books);
});

export default router;
