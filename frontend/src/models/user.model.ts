export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'instructor' | 'admin';
    profilePicture?: string;
}
