import path from 'path';

const base = '/';
const audioPath = path.join(base, '/audio');

export const audio = (fileName: string) =>
  path.join(audioPath, fileName);
