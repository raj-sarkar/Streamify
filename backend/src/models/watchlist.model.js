import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    movieId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
        required: true,
    },
}, { timestamps: true });

const Watchlist = mongoose.model("watchlist", watchlistSchema);

export default Watchlist;
