import 'dotenv/config';
import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { cloudinaryConfig } from '../util/cloudinaryConfig';

export const Image = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: cloudinaryConfig('ethang/images'),
      label: 'Source',
    }),
    name: text(),
    alt: text(),
    project: relationship({ ref: 'Project.image', many: true }),
    blog: relationship({ ref: 'Blog.image', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['project', 'Source', 'name', 'alt'],
    },
  },
});
