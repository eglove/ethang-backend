import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Project } from './schemas/Project';
import { Image } from './schemas/Image';
import { Logo } from './schemas/Logo';
import { Blog } from './schemas/Blog';
import { Course } from './schemas/Course';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/ethang-backend';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password', 'url'],
  },
});

export default withAuth(
  config({
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
      User,
      Project,
      Image,
      Logo,
      Blog,
      Course,
    }),
    ui: {
      isAccessAllowed: ({ session }) => session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`,
    }),
  })
);
