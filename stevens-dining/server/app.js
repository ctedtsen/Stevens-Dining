const app = require("express");
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: /\localhost:3000/, methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
console.log("new client connected", socket.id);

  socket.on("user_join", (name) => {
    console.log("A user joined their name is " + name);
    socket.broadcast.emit("user_join", name);
  });

  socket.on("join-room", (data) => {
    socket.leave(data.previousRoom);
    console.log("left " + data.previousRoom);
    socket.join(data.newRoom);
    console.log(`joined room ${data.newRoom}`);
    socket.emit("joined-room", data.newRoom);
  });

socket.on("message", ({ name, message }) => {
  //console.log(name, message, socket.id);
  io.emit("message", { name, message });
});

socket.on("send-message", (data) => {
  console.log(data);
  let name = data.name;
  let message = data.message;
  room = data.room;
  io.to(data.room).emit("receive-message", { name, message, room });
});

  socket.on("disconnect", () => {
    console.log("Disconnect Fired");
  });
});

server.listen(4000, () => {
  console.log(`listening on *:${4000}`);
});