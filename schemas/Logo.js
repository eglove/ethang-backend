import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { checkbox, relationship, text } from '@keystone-next/fields';
import { cloudinaryConfig } from '../util/cloudinaryConfig';

export const Logo = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: cloudinaryConfig,
      label: 'Source',
    }),
    name: text(),
    alt: text(),
    home: checkbox(),
    course: relationship({
      ref: 'Course.logo',
      many: true,
    }),
  },
});
