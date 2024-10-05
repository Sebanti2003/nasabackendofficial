import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
import connectDB from './db/index.js';
import testrouter from './routes/test.route.js'
import planetrouter from './routes/planets.route.js'
const app=express();

//DATABASE CONNECTION
connectDB();

//general middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/planets',planetrouter);
app.use('/api/v1/test',testrouter)

export default app;