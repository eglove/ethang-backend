import { list } from '@keystone-next/keystone/schema';
import { relationship, text, timestamp } from '@keystone-next/fields';

export const Project = list({
  fields: {
    name: text({ isRequired: true }),
    created: timestamp({ isRequired: true }),
    updated: timestamp(),
    githubLink: text(),
    liveLink: text(),
    description: text({ isRequired: true, ui: { displayMode: 'textarea' } }),
    // image: relationship(),
  },
});
