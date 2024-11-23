import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your React app's URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for incoming messages
  socket.on("message", (message) => {
    io.emit("message", message); // Emit message to all clients, including the sender
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});