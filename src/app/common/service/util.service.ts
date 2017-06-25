import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

//consts
import { message } from '../message';


@Injectable()
export class UtilService {
    processHttpResponse () {
        
    }    

    successNotification(msg = message.success) {
        toastr.success(msg);
    }

    warningNotification(msg = message.error) {
        toastr.info(msg);
    }

    infoNotification(msg = message.success) {
        toastr.warning(msg);
    }

    errorNotification(msg = message.error) {
        toastr.error(msg);
    }       
}