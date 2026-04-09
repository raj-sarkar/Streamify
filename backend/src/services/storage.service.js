import fs from 'fs';
import path from 'path';
import cloudinary from '../config/cloudinary.js';
import streamifier from "streamifier";

const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "streamify/images" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        streamifier.createReadStream(file.buffer).pipe(stream);
    });
};

export const uploadToCloudinary = async (file) => {
    try {
        const result = await uploadImage(file);
        return result.secure_url;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Failed to upload file to Cloudinary');
    }
};

export const saveVideo = async (file, videoId) => {
    const filenameWithExt = `${videoId}.mp4`;
    const filePath = path.join('uploads/raw', filenameWithExt);

    fs.writeFileSync(filePath, file.buffer);

    return filePath;
};
