// dotenv.config();
// import dotenv from "dotenv";

import express from "express";
import session from 'express-session';
import connectRedis from "connect-redis";
import Redis from 'ioredis';
import mongoose from "mongoose";

// import { APP_PORT, MONGO_OPTIONS, MONGO_URI, REDIS_OPTIONS } from "./config";
// import { SESSION_OPTIONS } from "./config/session";

(async () => {
  // await mongoose.connect(MONGO_URI, MONGO_OPTIONS)
// const RedisStore = connectRedis(session);

// const redisClient = new Redis(REDIS_OPTIONS);

const app = express();

// app.use(
//   session({
//     ...SESSION_OPTIONS,
//     store: new RedisStore({ client: redisClient })
//   })
// )

app.get("/", (req, res) => {
  res.json({ message: "ok" })
})



app.listen(process.env.APP_PORT, () => {
  console.log(`Listenning to Port ${process.env.APP_PORT}`)
  // console.log(process.env)
})
})()
