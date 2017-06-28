import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { environment } from '../../../environments/environment';

import { FileUploader } from 'ng2-file-upload';

@Injectable()
export class ImageService {

    uploader: FileUploader;

    imageId: number;

    initUpload(uploader: FileUploader) {
        this.uploader = uploader;
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);            
        };

        this.uploader.uploadAll();
    }  

}