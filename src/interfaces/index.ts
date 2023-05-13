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
    bio?: string
}

export interface IAuth {
    email: string;
    password: string;
    redirectPath?: string;
}
