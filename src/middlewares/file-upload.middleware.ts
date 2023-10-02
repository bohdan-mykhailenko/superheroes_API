import { Injectable, NestMiddleware } from '@nestjs/common';
import * as multer from 'multer';

@Injectable()
export class FileUploadMiddleware implements NestMiddleware {
  private _storage?: multer.StorageEngine;

  private get storage(): multer.StorageEngine {
    if (!this._storage) {
      this._storage = multer.diskStorage({
        destination: (req, file, cb) => {
          // Define the destination folder where files will be saved
          cb(null, 'public/images/superheroes');
        },
        filename: (req, file, cb) => {
          // Generate a unique filename for each uploaded file
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtension = file.originalname.split('.').pop();
          const filename = `${uniqueSuffix}.${fileExtension}`;
          cb(null, filename);
        },
      });
    }
    return this._storage;
  }

  private upload = multer({ storage: this.storage });

  use(req: any, res: any, next: () => void) {
    // Use the multer middleware to handle file uploads
    this.upload.array('images', 10)(req, res, (err) => {
      if (err) {
        // Handle any errors that occur during file upload
        console.error('Error saving files:', err);
        return res.status(500).json({ message: 'Error saving files' });
      }
      next();
    });
  }
}
