import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    duration: {
        type: Number,
    },
    thumbnail: {
        type: String,
    },
    hlsUrl: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
    weeklyViews: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const Movie = mongoose.model("movie", movieSchema);

export default Movie;
