import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const multerOptions = {
  storage: diskStorage({
    destination: path.join('public', 'images', 'superheroes'),
    filename: (req, file, callback) => {
      const uniqueSuffix = uuidv4();

      callback(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
    },
  }),
};
