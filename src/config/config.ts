import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3001;

export const config = {
  server: {
    port: port,
  },
  dbURL: process.env.DB_URL,
};
