import path from 'path';

const images = '/images';
const backgrounds = path.join(images, 'backgrounds');
const icons = path.join(images, 'icons');

export const icon = (fileName: string) => path.join(icons, fileName);
export const background = (fileName: string) =>
  path.join(backgrounds, fileName);
