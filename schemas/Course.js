import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const Course = list({
  fields: {
    title: text({ isRequired: true }),
    logo: relationship({
      ref: 'Logo.course',
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
      initialColumns: ['course', 'name', 'alt'],
    },
  },
});
