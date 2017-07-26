import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService {

    protected authObjectService: any;

    constructor(private http: Http) {
    }

    setAuthObjectService(authObjectService: any) {
        this.authObjectService = authObjectService;
    }

    get(url, options?: RequestOptions) {
        let headers = new Headers();              
        options = this.prepareOption(options);        
        return this.http.get(url, options);
    }

    post(url, data, options?: RequestOptions) {
        options = this.prepareOption(options);
        return this.http.post(url, data, options);
    }

    put(url, data, options?: RequestOptions) {
        options = this.prepareOption(options);        
        return this.http.post(url, data, options);
    }

    delete(url, options?: RequestOptions) {
        options = this.prepareOption(options);  
        return this.http.delete(url, options);
    }

    private prepareOption(options?: RequestOptions) {
        if (options) {
            options.params.append('token', this.authObjectService.getToken());        
        } else {
            let myParams = new URLSearchParams();
            myParams.append('token', this.authObjectService.getToken());

            options = new RequestOptions({params: myParams});
        }

        return options;
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }
}