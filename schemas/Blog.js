import { list } from '@keystone-next/keystone/schema';
import { document } from '@keystone-next/fields-document';
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
    content: document({
      formatting: {
        alignment: {
          center: true,
          end: true,
        },
        blockTypes: {
          blockquote: true,
          code: true,
        },
        inlineMarks: {
          bold: true,
          code: true,
          italic: true,
          keyboard: true,
          strikethrough: true,
          subscript: true,
          superscript: true,
          underline: true,
        },
        headingLevels: [1, 2, 3, 4, 5, 6],
        listTypes: {
          ordered: true,
          unordered: true,
        },
        softBreaks: true,
      },
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      dividers: true,
    }),
  },
  ui: {
    listView: {
      initialColumns: ['order', 'title', 'author', 'created', 'updated'],
    },
  },
});
