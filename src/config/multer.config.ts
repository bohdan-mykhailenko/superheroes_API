import { diskStorage } from 'multer';
import { generateId } from 'src/helpers/generateFileName';

export const multerOptions = {
  storage: diskStorage({
    destination: './public/images/superheroes',
    filename: (req, file, callback) => {
      const uniqueSuffix = generateId(10);

      callback(null, `${uniqueSuffix}-${file.originalname}`);
    },
  }),
};
