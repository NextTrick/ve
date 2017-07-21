
import { AbstractEntity } from './abstract.entity';

export class Resource extends AbstractEntity {
    id?: number;
    resourceId?: number;
    uri: string;    
    name: string;
    status?: number;
}