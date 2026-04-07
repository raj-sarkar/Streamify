import mongoose from "mongoose";

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
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    }
}
    , { timestamps: true });

const Video = mongoose.model("Video", videoSchema);

export default Video;