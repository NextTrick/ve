
import { AbstractEntity } from './abstract.entity';

export class Rol extends AbstractEntity {
    id?: number;
    rolId?: number;
    name: string;    
    status?: number;
}