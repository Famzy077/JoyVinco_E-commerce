import Redis from "ioredis"
import dotenv from 'dotenv'

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

redis.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

redis.set("foo", "bar").then(() => {
  console.log('Value set successfully');
}).catch((err) => {
  console.error('Error setting value:', err);
});