import multer from 'multer';

const storage = multer.memoryStorage();
const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "video/mp4",
    "video/mkv"
];

const fileFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Unsupported file type"), false);
    }
};

export const upload = multer({ storage, fileFilter, limits: { fileSize: 1000 * 1024 * 1024 } });
