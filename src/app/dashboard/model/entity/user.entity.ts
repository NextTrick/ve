import { User as UserInterface } from '../../interface/user.interface';
import { AbstractEntity } from './abstract.entity';

export class User extends AbstractEntity implements UserInterface {
    id?: number;
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