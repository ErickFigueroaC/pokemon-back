import { config } from 'dotenv';

config();

export default {
  host: process.env.HOST_DB || '',
  database: process.env.DATABASE || '',
  user: process.env.USER_DB || '',
  password: process.env.PASSWORD_DB || '',
};

