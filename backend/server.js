import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accpect JSON data in the req.body

app.use("/api/products", productRoutes)





// Postman

app.listen(3000, () => {
	connectDB();
  console.log("Sever stared at http://localhost:3000");
});



