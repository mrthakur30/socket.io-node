const { log } = require('console');
const app = require('express');
const PORT = process.env.PORT || 5000;
const server = require('http').createServer(app);

const io = require('socket.io')(server,{
   cors: {
        origin: "*",
      }
});

io.on("connection",(socket)=>{
   console.log("What is socket",+socket);
   console.log("Socket connected");

   socket.on("chat",(payload)=>{
    console.log("Payload",+payload);
    io.emit("chat",payload);
  
   })
})

server.listen(PORT,()=>console.log("Port 5000 is active"))