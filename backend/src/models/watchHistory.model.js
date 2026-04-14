import mongoose from "mongoose";

const watchHistorySchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "type",
        required: true
    },
    type:{ 
        type: String,
        enum: ["movie", "video"],
        required: true
    },
    timestamp: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

watchHistorySchema.index({ userId: 1, videoId: 1 }, { unique: true });
const WatchHistory = mongoose.model("watchHistory", watchHistorySchema);

export default WatchHistory;
