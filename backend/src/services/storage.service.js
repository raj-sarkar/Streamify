import fs from 'fs';
import path from 'path';

export const saveVideo = async(file,videoId) => {
    const filenameWithExt = `${videoId}.mp4`;
    const filePath = path.join('uploads/raw', filenameWithExt);
    
    fs.writeFileSync(filePath, file.buffer);

    return filePath;
};
