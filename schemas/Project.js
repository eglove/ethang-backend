import { list } from '@keystone-next/keystone/schema';
import { document } from '@keystone-next/fields-document';
import { relationship, text, timestamp } from '@keystone-next/fields';

export const Project = list({
  fields: {
    name: text({ isRequired: true }),
    created: timestamp({
      isRequired: true,
      defaultValue: Date.now,
    }),
    updated: timestamp(),
    githubLink: text(),
    liveLink: text(),
    description: document({
      isRequired: true,
      links: true,
      dividers: true,
    }),
    image: relationship({
      ref: 'Image.project',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'name', 'alt'],
        inlineCreate: { fields: ['image', 'name', 'alt'] },
        inlineEdit: { fields: ['image', 'name', 'alt'] },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'githubLink', 'liveLink', 'description'],
    },
  },
});
