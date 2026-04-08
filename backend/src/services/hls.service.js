import {exec} from "child_process";
import path from "path";
import fs from "fs";

export const convertToHLS = (videoPath, videoId ) => {
    return new Promise((resolve, reject) => {
        const outputDir = path.join('uploads','hls', videoId);

        if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputPath = path.join(outputDir, 'index.m3u8');

        const command = `ffmpeg -i ${videoPath} -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ${outputPath}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error converting video: ${stderr}`);
                return reject(error);
            }

            resolve(outputPath);
        });
    });
};
