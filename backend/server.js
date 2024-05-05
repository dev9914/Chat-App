import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messageRoutes from '../backend/routes/message.route.js';
import userRoutes from '../backend/routes/user.route.js';
import connetToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

app.get('/', (req, res)=>{
    // root route http://localhost:5000/
    res.send("Hello world");
})

server.listen(PORT, ()=>{
    connetToMongoDB();
    console.log(`Server Running on port http://localhost:${PORT}`);
});