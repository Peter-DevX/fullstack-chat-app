// import express from "express";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.routes.js";
// import dotenv from "dotenv";
// import { connectDB } from "./lib/db.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { app, server } from "./lib/socket.js";

// import path from "path";

// dotenv.config();

// const PORT = process.env.PORT;
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/chat-app/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.join(__dirname, "../frontend/chat-app", "dist", "index.html")
//     );
//   });
// }

// server.listen(PORT, () => {
//   console.log("Server is running on PORT:" + PORT);
//   connectDB();
// });


const express = require("express");
const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.routes.js");
const dotenv = require("dotenv");
const { connectDB } = require("./lib/db.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { app, server } = require("./lib/socket.js");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT;
const __dirnameResolved = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirnameResolved, "../frontend/chat-app/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirnameResolved, "../frontend/chat-app", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
