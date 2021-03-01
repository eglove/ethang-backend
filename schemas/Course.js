import { list } from '@keystone-next/keystone/schema';
import {
  checkbox,
  integer,
  relationship,
  text,
  timestamp,
} from '@keystone-next/fields';

export const Course = list({
  fields: {
    order: integer({ isRequired: true, isUnique: true }),
    title: text({ isRequired: true }),
    url: text(),
    hours: text(),
    complete: checkbox(),
    updated: timestamp({ defaultValue: Date.now }),
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
      initialColumns: ['order', 'title'],
      initialSort: {
        field: 'order',
        direction: 'ASC',
      },
    },
  },
});
