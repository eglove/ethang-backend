import 'dotenv/config';
import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';

console.log('hey');
console.log(process.env.CLOUDINARY_CLOUD_NAME);
const cloudinaryConfig = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'ethang/images',
};

export const Image = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: cloudinaryConfig,
      label: 'Source',
    }),
    name: text(),
    alt: text(),
  },
});
