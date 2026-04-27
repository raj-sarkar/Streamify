export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'instructor' | 'admin';
    profilePictureUrl?: string;
}
