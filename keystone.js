import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/ethang-backend';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
  },
  lists: createSchema({
    // TODO create stuff
  }),
  ui: {
    // TODO change for roles
    isAccessAllowed: () => true,
  },
  // TODO add session values
});
