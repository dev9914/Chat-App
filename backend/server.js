import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messageRoutes from '../backend/routes/message.route.js';
import userRoutes from '../backend/routes/user.route.js';
import connetToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get('/', (req, res)=>{
    // root route http://localhost:5000/
    res.send("Hello world");
})

server.listen(PORT, ()=>{
    connetToMongoDB();
    console.log(`Server Running on port http://localhost:${PORT}`);
});