import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Correct CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend ka URL
    credentials: true, // Cookies allow karne ke liye
  })
);
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Routes
app.use("/api/users", userRoutes);

export default app;