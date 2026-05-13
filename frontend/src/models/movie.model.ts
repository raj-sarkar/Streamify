export interface Movie {
    _id: string;
    title: string;
    description: string;
    genre: string[];
    thumbnail: string;
    uploadedBy: string;
    rating: number;
    views: number;
    weeklyViews: number;
    duration: number;
    hlsUrl: string;
    videoUrl: string;
}
