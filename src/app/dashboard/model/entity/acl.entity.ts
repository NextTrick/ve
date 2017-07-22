
import { AbstractEntity } from './abstract.entity';

export class Acl extends AbstractEntity {    
    aclId?: number;
    resourId?: number;    
    rolId?: number;
    status?: number;
}