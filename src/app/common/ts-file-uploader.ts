import { FileUploader, FileItem, ParsedResponseHeaders,
     FileUploaderOptions, FileLikeObject } from 'ng2-file-upload';

export class TsFileUploader extends FileUploader {

    options: FileUploaderOptions = {
        allowedMimeType: ['image/jpeg', 'image/png', 'image/gif'],
        allowedFileType: ['image'],
        removeAfterUpload: true,
        // autoUpload: true, 
        // queueLimit: 1,
        // headers: [
        //     {name: 'Content-Type', value: 'multipart/form-data'},
        //     {name: 'Accept', value: 'application/json'}
        // ]
    }

    constructor(options: FileUploaderOptions = {}) {
        super(options);
    }

    setUrl (url: string) {
        this.options.url = url;
    }

    onBeforeUploadItem(fileItem: FileItem) {
        fileItem.withCredentials = false;         
    }

    onCompleteItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        console.log("ImageUpload:uploaded:", item, status, response);
        console.log("Just response: ", response);            
        if (status == 200) {
            let res = JSON.parse(response);            
            if (res.success) {              
                // this.userService.imageId = res.data.imageId;
                // this.createUser();                
            }                
        }       
    }

    // onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any) {
    //     switch (filter.name) {
    //         case 'fileSize':
    //             this.errorMessage = `Maximum upload size exceeded (${item.size} of ${this.maxFileSize} allowed)`;
    //             break;
    //         case 'mimeType':
    //             const allowedTypes = this.allowedMimeType.join();
    //             this.errorMessage = `Type "${item.type} is not allowed. Allowed types: "${allowedTypes}"`;
    //             break;
    //         default:
    //             this.errorMessage = `Unknown error (filter is ${filter.name})`;
    //     }

    //     this.obs.next();
    // }    
    
}