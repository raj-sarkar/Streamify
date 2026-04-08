import multer from 'multer';
import path from 'path';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('video/')) {
        cb(null, true);
    } else {
        cb(new Error('Only video files are allowed!'), false);
    }
};

export const upload = multer({ storage, fileFilter, limits: { fileSize: 1000 * 1024 * 1024 } }); // Limit to 100MB
