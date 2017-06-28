export interface User {    
    email: string;
    password: string;
    clientId?: number;
    name: string;
    lastName: string;
    phone?: string;
    clientKey?: string;
    imageId?: string | null;
};