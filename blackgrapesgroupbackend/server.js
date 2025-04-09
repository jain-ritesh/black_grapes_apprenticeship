import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// MongoDB Connect
await connectDB();

// Server Start
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// Google App Password Generate Karo

// Google Security pe jao

// 2-Step Verification Enable karo

// App Password Generate karo (Mail → Other → "NodeMailer")