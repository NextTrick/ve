import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

// import { User } from '../dashboard/interface/user.interface';
import { User } from '../dashboard/model/entity/user.entity';

@Injectable()
export class UserService {

    imageId: string | null = null; 

    constructor (private http: Http) {
    }

    create(user: User) {  
        if (this.imageId != null) {
            user.imageId = this.imageId;
        }             
        let userData = JSON.stringify(user);    

        return this.http.post(
                environment.backendUrl + 'user',
                {user}        
            )
            .map(res => res.json())            
            .do(
                (response) => {                    
                    this.imageId = null;
                }
            );
    }

    update(user: User) {  
        if (this.imageId != null) {
            user.imageId = this.imageId;
        }             
        let userData = JSON.stringify(user);    

        return this.http.put(
                environment.backendUrl + 'user/' + user.userId,
                {user}        
            )
            .map(res => res.json())
            .do(
                (response) => {                    
                    this.imageId = null;
                }
            );
    }

    delete(item: any) {        
        return this.http.delete(
            environment.backendUrl + 'user/' + item.userId
        )
        .map(res => res.json());
    }

    getAll(filter: any) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        
        let myParams = new URLSearchParams();
        myParams.append('pageIndex', filter.pageIndex);
        myParams.append('pageSize', filter.pageSize);
        if (filter.sortField) {
            myParams.append('sortField', filter.sortField);	
        }

        if (filter.sortOrder) {
            myParams.append('sortOrder', filter.sortOrder);	
        }
        let options = new RequestOptions({params: myParams});

        return this.http.get(
            environment.backendUrl + 'user', options
        )
        .map(res => res.json());
    }

    get(userId: number) {
        return this.http.get(
            environment.backendUrl + 'user/' + userId
        )
        .map(res => res.json());
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

