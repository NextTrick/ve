export interface User {    
    email: string;
    password: string;
    clientId?: number;
    name: string;
    lastName: string;
    phone?: string;
    imageId?: number | null;
};