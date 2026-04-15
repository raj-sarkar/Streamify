import {
    approveInstructor,
    countInstructors,
    countUsers,
    getInstructors,
    getUsers,
    getUserById,
    deleteUser
} from '../repositories/user.repository.js';
import { countMovies } from '../repositories/movie.repository.js';
import { countCourses } from '../repositories/course.repository.js';
import { countPayments, getTotalRevenue } from '../repositories/payment.reporsitory.js';
import { countWatchHistoryEntries } from '../repositories/watchHistory.repository.js';
import { countWatchlistEntries } from '../repositories/watchlist.repository.js';

export const getAllUsersService = async () => {
    return await getUsers();
};

export const getAllInstructorsService = async () => {
    return await getInstructors();
};

export const approveInstructorRequestService = async (userId) => {
    const user = await getUserById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    if(user.role === 'instructor') {
        throw new Error('User is already an instructor');
    }

    return await approveInstructor(userId);
};

export const deleteUserService = async (userId) => {
    const user = await getUserById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    return await deleteUser(userId);
};

export const getAnalyticsService = async () => {
    const [
        totalUsers,
        totalInstructors,
        totalMovies,
        totalCourses,
        successfulPayments,
        totalRevenue,
        totalWatchHistoryEntries,
        totalWatchlistEntries
    ] = await Promise.all([
        countUsers(),
        countInstructors(),
        countMovies(),
        countCourses(),
        countPayments(),
        getTotalRevenue(),
        countWatchHistoryEntries(),
        countWatchlistEntries()
    ]);

    return {
        totalUsers,
        totalInstructors,
        totalMovies,
        totalCourses,
        successfulPayments,
        totalRevenue,
        totalWatchHistoryEntries,
        totalWatchlistEntries
    };
};
