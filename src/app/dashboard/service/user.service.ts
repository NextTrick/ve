import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { User } from '../model/entity/user.entity';

import { AbstractService } from '../../common/service/abstract.service';

@Injectable()
export class UserService extends AbstractService {

    imageId: string | null = null; 

    path: string =  'user';
    searchPath: string = 'user/search';     

    create(user: User) {          
        if (this.imageId != null) {
            user.imageId = this.imageId;
        }   

        return super.create(user)
            .do(
                (response) => {                    
                    this.imageId = null;
                }
            );       
    }

    update(userId: number, user: User) {  
        if (this.imageId != null) {
            user.imageId = this.imageId;
        }   

        return super.update(userId, user)
            .do(
                (response) => {                    
                    this.imageId = null;
                }
            );
    }

    uploadImage() {

    }

    testObservable() {
        let myObservable = Observable.create(function (obs) {
            obs.next('Im a event  from stream');
            obs.error('this a second error event')
            obs.complete();
        });

        let observer = {
            next: function (value) {
                console.log('this value come from stream:' + value);
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                console.log('completed');
            }
        }

        myObservable.subscribe(observer);
        //or
        // myObservable.subscribe(
        //     nextResponse => {},
        //     errorResponse => {},
        //     () => {}
        // );
    }
}

