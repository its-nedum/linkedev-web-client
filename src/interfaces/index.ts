export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
    birthday: string;
    skills: string[];
    avatar: {
        url: string;
    };
    yearsOfExperience?: string;
    // phone: string;
    // createdAt: string;
}