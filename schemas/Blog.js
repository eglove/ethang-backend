import { list } from '@keystone-next/keystone/schema';
import { relationship, text, timestamp } from '@keystone-next/fields';

export const Blog = list({
  fields: {
    title: text({ isRequired: true }),
    summary: text({ isRequired: true, ui: { displayMode: 'textarea' } }),
    author: relationship({
      ref: 'User.blogPost',
    }),
    created: timestamp({
      isRequired: true,
      defaultValue: Date.now,
    }),
    updated: timestamp(),
    image: relationship({
      ref: 'Image.blog',
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
      initialColumns: ['title', 'author', 'created', 'updated'],
    },
  },
});
