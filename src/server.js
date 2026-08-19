import express from "express";
import booksRouter from "./routes/books.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Books API is running",
  });
});

app.use("/api/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
