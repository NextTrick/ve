import { User as UserInterface } from '../../interface/user.interface';

export class User implements UserInterface {
    userId?: number;
    email: string;
    password: string;
    clientId?: number;
    name: string;
    lastName: string;
    phone?: string;
    clientKey?: string;
    imageId?: string | null;
    image?: string;
}