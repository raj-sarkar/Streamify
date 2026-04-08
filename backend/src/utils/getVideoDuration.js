import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export const getVideoDuration = async (filepath) => {
    try {
        const { stdout } = await execPromise(
            `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filepath}"`
        );

        return parseFloat(stdout);
    } catch (err) {
        console.error("Error getting duration:", err);
        return 0;
    }
};
