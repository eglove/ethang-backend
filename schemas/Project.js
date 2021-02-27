import { list } from '@keystone-next/keystone/schema';
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
    description: text({ isRequired: true, ui: { displayMode: 'textarea' } }),
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
