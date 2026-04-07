import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './utils/connectDB.js';
import dns from 'dns';
import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import watchlistRoutes from './routes/watchlist.route.js';
import reviewRoutes from './routes/review.routes.js';
import courseRoutes from './routes/course.route.js';
import sectionRoutes from './routes/section.route.js';
import videoRoutes from './routes/video.route.js';

dns.setServers(["1.1.1.1","1.0.0.1"]);

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/watchlist', watchlistRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
