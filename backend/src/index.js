import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/chat-app/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.join(__dirname, "../frontend/chat-app", "dist", "index.html")
//     );
//   });
// }

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/chat-app/dist");
  app.use(express.static(frontendPath));

  // Catch-all for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
