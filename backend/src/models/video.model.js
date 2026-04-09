import mongoose from "mongoose";
import { type } from "os";

const videoSchema = new mongoose.Schema({
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
    },
    hlsUrl:{
        type: String,
    },
    duration: {
        type: Number,
    }
}
    , { timestamps: true });

const Video = mongoose.model("video", videoSchema);

export default Video;